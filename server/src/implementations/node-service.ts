import { requestCallback } from "grpc";
import * as uuid from "uuid";
import { DataProvider } from "../components/data-provider";
import * as graph_pb from "../generated/graph_pb";
import * as graph from "../generated/graph_pb.js";
import * as grpc from "grpc";

interface Request<T> {
  request: T;
}

export class NodeDefinition {
  constructor(protected readonly provider: DataProvider) {}

  protected deserializeNode(item: string) {
    return graph.Node.deserializeBinary(Buffer.from(item, "base64"));
  }

  public async getNode(
    call: Request<graph_pb.GetNodeRequest>,
    callback: requestCallback<graph_pb.GetNodeResponse>
  ) {
    const response = new graph.GetNodeResponse();
    const data = await this.provider.read();
    const node = data.find((item: string) => {
      const node = this.deserializeNode(item);
      return node.getId() === call.request.getId();
    });

    if (!node) {
      return callback({
        code: grpc.status.NOT_FOUND,
        name: "NOT_FOUND",
        message: "No such node"
      });
    }

    response.setNode(this.deserializeNode(node));
    callback(null, response);
  }

  public async getNodes(
    call: Request<graph_pb.GetNodesRequest>,
    callback: requestCallback<graph_pb.GetNodesResponse>
  ) {
    const response = new graph.GetNodesResponse();
    const data = await this.provider.read();
    const nodes = data.map(this.deserializeNode);
    response.setNodeList(nodes);
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

  public updateNode(
    call: Request<graph_pb.UpdateNodeRequest>,
    callback: requestCallback<graph_pb.GetNodeResponse>
  ) {
    const response = new graph.GetNodeResponse();
    const node = new graph.Node();
    response.setNode(node);
    callback(null, response);
  }

  public deleteNode(
    req: graph_pb.DeleteNodeRequest,
    callback: requestCallback<graph_pb.DeleteNodeResponse>
  ) {
    console.log("delete node");
  }
}

export default NodeDefinition;
