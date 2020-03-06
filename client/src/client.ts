import * as protoLoader from "@grpc/proto-loader";
import { credentials, loadPackageDefinition } from "grpc";
import { GetNodesRequest } from "./generated/graph_pb";

const packageDefinition = protoLoader.loadSync("../graph.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const graphProto = loadPackageDefinition(packageDefinition).api as any;

function main() {
  const client = new graphProto.Graph(
    "localhost:9090",
    credentials.createInsecure()
  );
  const request = new GetNodesRequest();
  client.getNodes(request, function(err: any, response: any) {
    console.log("Greeting:", response);
  });
}

main();
