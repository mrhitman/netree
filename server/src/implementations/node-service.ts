import { EventEmitter } from "events";
import * as grpc from "grpc";
import { requestCallback } from "grpc";
import { curry } from "lodash";
import uuid from "uuid";
import graph_pb, { Commands } from "../../../generated/graph_pb";
import { DataProvider } from "../components/data-provider";

export class NodeDefinition extends EventEmitter {
  constructor(protected readonly provider: DataProvider) {
    super();
  }

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

    node.setId(uuid.v4());
    node.setName(call.request.getName());
    node.setParentId(call.request.getParentId());

    response.setNode(node);

    await this.provider.save(
      Buffer.from(node.serializeBinary()).toString("base64")
    );
    this.emit("add", node);
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
      this.emit("update", node);
      await this.provider.update(
        Buffer.from(node.serializeBinary()).toString("base64"),
        Buffer.from(sendedNode.serializeBinary()).toString("base64")
      );
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
      this.emit("delete", node);
      callback(null, response);
    });
  }

  public async subscribe(
    call: grpc.ServerWritableStream<graph_pb.SubsribeResponse>
  ) {
    function stream(command: 0 | 1 | 2, node: graph_pb.Node) {
      const response = new graph_pb.SubsribeResponse();
      response.setCommand(command);
      response.setNode(node);
      call.write(response);
    }

    this.on("add", curry(stream)(Commands.ADD));
    this.on("update", curry(stream)(Commands.UPDATE));
    this.on("delete", curry(stream)(Commands.DELETE));
  }
}

export default NodeDefinition;
