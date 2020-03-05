import { requestCallback } from "grpc";
import * as graph_pb from "../generated/graph_pb";
import * as graph from "../generated/graph_pb.js";

export class NodeDefinition {
  constructor(protected readonly dataSource: any) {}

  public getNode(
    req: graph_pb.GetNodeRequest,
    callback: requestCallback<graph_pb.GetNodeResponse>
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
    req: graph_pb.GetNodesRequest,
    callback: requestCallback<graph_pb.GetNodesResponse>
  ): void {
    const response = new graph.GetNodesResponse();
    const node = new graph.Node();
    node.setId("Test id");
    node.setName("Test name");
    response.setNodeList([node]);
    callback(null, response);
  }

  public addNode(
    req: graph_pb.AddNodeRequest,
    callback: requestCallback<graph_pb.GetNodeResponse>
  ) {
    console.log("add node");
  }
  public updateNode(
    req: graph_pb.UpdateNodeRequest,
    callback: requestCallback<graph_pb.GetNodeResponse>
  ) {
    console.log("update node");
  }

  public deleteNode(
    req: graph_pb.DeleteNodeRequest,
    callback: requestCallback<graph_pb.DeleteNodeResponse>
  ) {
    console.log("delete node");
  }
}

export default NodeDefinition;
