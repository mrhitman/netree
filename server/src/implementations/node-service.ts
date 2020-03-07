import * as grpc from "grpc";
import { requestCallback } from "grpc";
import { map, omit } from "lodash";
import { v4 } from "uuid";
import { DataProvider } from "../components/data-provider";
import { IGraphService } from "../generated/graph_grpc_pb";
import graph_pb, { Commands } from "../generated/graph_pb";

export class NodeDefinition implements IGraphService {
  protected subscriptions: Record<
    string,
    grpc.ServerWritableStream<graph_pb.SubsribeResponse>
  > = {};

  constructor(protected readonly provider: DataProvider) {}

  protected deserializeNode(item: string) {
    return graph_pb.Node.deserializeBinary(Buffer.from(item, "base64"));
  }

  protected findNode(id: string) {
    return this.provider
      .readStream<string>()
      .split()
      .filter(Boolean)
      .map(this.deserializeNode)
      .find(node => node.getId() === id);
  }

  public async getNode(
    call: grpc.ServerUnaryCall<graph_pb.GetNodeRequest>,
    callback: grpc.sendUnaryData<graph_pb.GetNodeResponse>
  ) {
    this.findNode(call.request.getId()).toCallback((err, node) => {
      if (err || !node) {
        return callback(
          {
            code: grpc.status.NOT_FOUND,
            name: "NOT_FOUND",
            message: "No such node"
          },
          null
        );
      }

      const response = new graph_pb.GetNodeResponse();
      response.setNode(node);
      callback(null, response);
    });
  }

  public async getNodes(
    call: grpc.ServerWritableStream<graph_pb.GetNodesRequest>
  ) {
    this.provider
      .readStream<string>()
      .split()
      .filter(Boolean)
      .map(this.deserializeNode)
      .each(node => {
        const response = new graph_pb.GetNodesResponse();
        response.setNodeList([node]);
        call.write(response);
      })
      .done(() => call.end());
  }

  public async addNode(
    call: grpc.ServerUnaryCall<graph_pb.AddNodeRequest>,
    callback: requestCallback<graph_pb.GetNodeResponse>
  ) {
    const response = new graph_pb.GetNodeResponse();
    const node = new graph_pb.Node();

    node.setId(v4());
    node.setName(call.request.getName());
    node.setParentId(call.request.getParentId());

    response.setNode(node);

    await this.provider.save(
      Buffer.from(node.serializeBinary()).toString("base64")
    );
    this.broadcast({ command: Commands.ADD, node });
    callback(null, response);
  }

  public async updateNode(
    call: grpc.ServerUnaryCall<graph_pb.UpdateNodeRequest>,
    callback: grpc.sendUnaryData<graph_pb.GetNodeResponse>
  ) {
    this.findNode(call.request.getId()).toCallback(async (err, node) => {
      const sendedNode = call.request.getNode();

      if (!node || !sendedNode) {
        return callback(
          {
            code: grpc.status.INVALID_ARGUMENT,
            name: "INVALID_ARGUMENT",
            message: "Invalid node"
          },
          null
        );
      }
      node.setName(sendedNode.getName());
      node.setParentId(sendedNode.getParentId());

      const response = new graph_pb.GetNodeResponse();
      await this.provider.update(
        Buffer.from(node.serializeBinary()).toString("base64"),
        Buffer.from(sendedNode.serializeBinary()).toString("base64")
      );
      this.broadcast({ command: Commands.UPDATE, node });
      response.setNode(node);
      callback(null, response);
    });
  }

  public async deleteNode(
    call: grpc.ServerUnaryCall<graph_pb.DeleteNodeRequest>,
    callback: grpc.sendUnaryData<graph_pb.DeleteNodeResponse>
  ) {
    this.findNode(call.request.getId()).toCallback(async (err, node) => {
      if (!node) {
        callback(
          {
            code: grpc.status.INVALID_ARGUMENT,
            name: "INVALID_ARGUMENT",
            message: "Invalid node"
          },
          null
        );

        return;
      }

      const response = new graph_pb.DeleteNodeResponse();
      await this.provider.delete(
        Buffer.from(node.serializeBinary()).toString("base64")
      );
      response.setDeleted(true);
      this.broadcast({ command: Commands.DELETE, node });
      callback(null, response);
    });
  }

  public async subscribe(
    call: grpc.ServerWritableStream<graph_pb.SubsribeResponse>
  ) {
    this.subscriptions[call.getPeer()] = call;
    call.on(
      "close",
      () => (this.subscriptions = omit(this.subscriptions, call.getPeer()))
    );
    call.on(
      "finish",
      () => (this.subscriptions = omit(this.subscriptions, call.getPeer()))
    );
  }

  protected broadcast(message: { command: 0 | 1 | 2; node: graph_pb.Node }) {
    map(this.subscriptions, call => {
      const response = new graph_pb.SubsribeResponse();
      response.setCommand(message.command);
      response.setNode(message.node);
      call.write(response);
    });
  }
}

export default NodeDefinition;
