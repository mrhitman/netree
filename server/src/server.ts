import { config } from "dotenv";
import { Server, ServerCredentials } from "grpc";
import * as graph_grpc_pb from "../../generated/graph_grpc_pb.js";
import { GraphFileDataProvider } from "./components/graph-data-provider";
import NodeDefinition from "./implementations/node-service";

config();

export function createServer() {
  const server = new Server();
  const implementation = (new NodeDefinition(
    new GraphFileDataProvider("data.txt")
  ) as any) as graph_grpc_pb.IGraphService;

  server.addService<graph_grpc_pb.IGraphService>(
    (graph_grpc_pb as any)["api.Graph"],
    implementation
  );
  return server;
}

if (!module.parent) {
  const port = process.env.PORT || 3000;
  const server = createServer();
  server.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure());
  server.start();
  global.console.log(`Server binded to 0.0.0.0:${port}`);
}
