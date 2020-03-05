import * as grpc from "grpc";
import { requestCallback } from "grpc";
import * as uuid from "uuid";
import { DataProvider } from "../components/data-provider";
import * as graph_pb from "../generated/graph_pb";
import { Node } from "../generated/graph_pb";
import * as graph from "../generated/graph_pb.js";

interface Request<T> {
  request: T;
}

export class NodeDefinition {
  protected nodes: Node[] = [];

  constructor(protected readonly provider: DataProvider) {
    provider.read().then((data: any[]) => {
      this.nodes = data.map(this.deserializeNode);
    });
  }

  protected deserializeNode(item: string) {
    return graph.Node.deserializeBinary(Buffer.from(item, "base64"));
  }

  protected findNode(id: string) {
    return this.nodes.find(node => node.getId() === id);
  }

  public async getNode(
    call: Request<graph_pb.GetNodeRequest>,
    callback: requestCallback<graph_pb.GetNodeResponse>
  ) {
    const node = this.findNode(call.request.getId());

    if (!node) {
      return callback({
        code: grpc.status.NOT_FOUND,
        name: "NOT_FOUND",
        message: "No such node"
      });
    }

    const response = new graph.GetNodeResponse();
    response.setNode(node);
    callback(null, response);
  }

  public async getNodes(
    call: Request<graph_pb.GetNodesRequest>,
    callback: requestCallback<graph_pb.GetNodesResponse>
  ) {
    const response = new graph.GetNodesResponse();
    response.setNodeList(this.nodes);
    callback(null, response);
  }

  public async addNode(
    call: Request<graph_pb.AddNodeRequest>,
    callback: requestCallback<graph_pb.GetNodeResponse>
  ) {
    const response = new graph.GetNodeResponse();
    const node = new graph.Node();

    node.setId(uuid.v4());
    node.setName(call.request.getName());
    node.setParentId(call.request.getParentId());
    response.setNode(node);

    await this.provider.save(
      Buffer.from(node.serializeBinary()).toString("base64")
    );
    callback(null, response);
  }

  public async updateNode(
    call: Request<graph_pb.UpdateNodeRequest>,
    callback: requestCallback<graph_pb.GetNodeResponse>
  ) {
    const node = this.findNode(call.request.getId());
    const sendedNode = call.request.getNode();

    if (!node || !sendedNode) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        name: "INVALID_ARGUMENT",
        message: "Invalid node"
      });
    }
    node.setName(sendedNode.getName());
    node.setParentId(sendedNode.getParentId());

    const response = new graph.GetNodeResponse();
    response.setNode(node);
    callback(null, response);
  }

  public async deleteNode(
    call: Request<graph_pb.DeleteNodeRequest>,
    callback: requestCallback<graph_pb.DeleteNodeResponse>
  ) {
    const node = this.findNode(call.request.getId());

    if (!node) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        name: "INVALID_ARGUMENT",
        message: "Invalid node"
      });
    }

    this.nodes = this.nodes.filter(
      node => node.getId() !== call.request.getId()
    );
    const response = new graph.DeleteNodeResponse();
    response.setDeleted(true);
    callback(null, response);
  }
}

export default NodeDefinition;
