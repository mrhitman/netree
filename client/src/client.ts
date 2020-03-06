import * as protoLoader from "@grpc/proto-loader";
import { credentials, loadPackageDefinition } from "grpc";
import * as minimist from "minimist";
import { GetNodesRequest } from "./generated/graph_pb";

const argv = minimist(process.argv.slice(2));

const packageDefinition = protoLoader.loadSync("../graph.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const graphProto = loadPackageDefinition(packageDefinition).api as any;

function createClient() {
  return new graphProto.Graph("localhost:9090", credentials.createInsecure());
}

async function getNodes() {
  const client = createClient();
  const request = new GetNodesRequest();
  client.getNodes(request, function(err: any, response: any) {
    console.log("GET NODES:", response);
  });
}

async function subscribe() {
  const client = createClient();
  const channel = client.Subscribe();

  channel.on("data", (data: any) => {
    global.console.log(data);
  });
}

console.log(process.argv);
