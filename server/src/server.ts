import { config } from "dotenv";
import { Server, ServerCredentials } from "grpc";
import * as services from "./generated/graph_grpc_pb.js";
import * as graph from "./generated/graph_pb.js";

function createServer() {
  const server = new Server();
  return server;
}

if (!module.parent) {
  config();
  const server = createServer();
  const port = process.env.PORT || 3000;
  server.addService(services.GraphService, {
    getNode: (call: any, callback: any) => {
      const response = new graph.GetNodeResponse();
      console.log(reponse);
      callback(null, response);
    },
    getNodes: () => console.log("get nodes"),
    addNode: () => console.log("add node"),
    updateNode: () => console.log("update node"),
    deleteNode: () => console.log("delete node")
  });

  // server.addService(api, () => {
  // console.log("HERE");
  // });
  server.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure());
  global.console.log(`Server binded to 0.0.0.0:${port}`);
  server.start();
}
