import { GraphClient } from "./generated/graph_grpc_pb";
import { Node } from "./generated/graph_pb";
import { Server, ServerCredentials } from "grpc";
import { config } from "dotenv";

function createServer() {
  const server = new Server();
  return server;
}

if (!module.parent) {
  config();
  const server = createServer();
  const port = process.env.PORT || 3000;
  //   server.addService(hello_proto.Greeter.service, {sayHello: sayHello});
  server.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure());
  global.console.log(`Server binded to 0.0.0.0:${port}`);
  server.start();
}
