import { config } from "dotenv";
import { Server, ServerCredentials } from "grpc";
import * as services from "./generated/graph_grpc_pb.js";
import NodeDefinition from "./implementations/node-service";

config();

function createServer() {
  const server = new Server();
  server.addService(services.GraphService, new NodeDefinition());
  return server;
}

if (!module.parent) {
  const port = process.env.PORT || 3000;
  const server = createServer();
  server.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure());
  server.start();
  global.console.log(`Server binded to 0.0.0.0:${port}`);
}
