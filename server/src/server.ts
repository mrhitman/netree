import { config } from "dotenv";
import { Server, ServerCredentials } from "grpc";
import { GraphFileDataProvider } from "./components/graph-data-provider";
import * as graph from "./generated/graph_grpc_pb.js";
import NodeDefinition from "./implementations/node-service";

config();

export function createServer() {
  const server = new Server();
  const implementation = new NodeDefinition(
    new GraphFileDataProvider("data.txt")
  );

  const service = (graph as any)["api.Graph"];
  server.addService(service, implementation);
  return server;
}

if (!module.parent) {
  const port = process.env.PORT || 3000;
  const server = createServer();
  server.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure());
  server.start();
  global.console.log(`Server binded to 0.0.0.0:${port}`);
}
