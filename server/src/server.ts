import { config } from "dotenv";
import { Server, ServerCredentials } from "grpc";
import * as graph_grpc_pb from "../../generated/graph_grpc_pb";
import { GraphFileDataProvider } from "./components/graph-data-provider";
import NodeDefinition from "./implementations/node-service";

config();

export function createServer() {
  const server = new Server();
  const implementation = new NodeDefinition(
    new GraphFileDataProvider("data.txt")
  );

  server.addService<graph_grpc_pb.IGraphService>(
    graph_grpc_pb.GraphService,
    (implementation as any) as graph_grpc_pb.IGraphService
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
