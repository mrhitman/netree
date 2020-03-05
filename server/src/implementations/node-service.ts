import { requestCallback, Server, ServerCredentials } from "grpc";
import {
  GetNodeRequest,
  GetNodeResponse,
  GetNodesRequest,
  GetNodesResponse
} from "../generated/graph_pb";
import * as graph from "../generated/graph_pb.js";

export class NodeDefinition {
  public getNode(
    req: GetNodeRequest,
    callback: requestCallback<GetNodeResponse>
  ) {
    const response = new graph.GetNodeResponse();
    const node = new graph.Node();
    node.setId("Test id");
    node.setName("Test name");
    response.setNode(node);
    global.console.log(req);
    callback(null, response);
  }

  public getNodes(
    req: GetNodesRequest,
    callback: requestCallback<GetNodesResponse>
  ): void {
    const response = new graph.GetNodesResponse();
    const node = new graph.Node();
    node.setId("Test id");
    node.setName("Test name");
    response.setNodeList([node]);
    callback(null, response);
  }

  public addNode() {
    console.log("add node");
  }
  public updateNode() {
    console.log("update node");
  }
  public deleteNode() {
    console.log("delete node");
  }
}

export default NodeDefinition;
