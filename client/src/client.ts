import * as protoLoader from "@grpc/proto-loader";
import { credentials, loadPackageDefinition } from "grpc";
import {
  GetNodesRequest,
  GetNodeRequest,
  GetNodeResponse,
  GetNodesResponse
} from "./generated/graph_pb";

const argv = process.argv.slice(2);

function help() {
  global.console.log(` -all                  # Get All Graph Nodes`);
  global.console.log(` -add <name> <parent>  # To Add Graph Node`);
  global.console.log(` -view <id>            # To Add Graph Node`);
  global.console.log(` -delete <id>          # To Delete Graph Node`);
  global.console.log(` -subscribe            # To subscribe`);
  global.console.log(` -help                 # This info`);
  process.exit(0);
}

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
  client.getNodes(request, function(err: Error, response: GetNodesResponse) {
    global.console.log("GET NODES:", response);
  });
}

async function getNode(id: string) {
  const client = createClient();
  const request = new GetNodeRequest();

  request.setId(id);
  client.getNode(request, function(err: Error, response: GetNodeResponse) {
    global.console.log("GET NODE:", response, err);
  });
}

async function subscribe() {
  const client = createClient();
  const channel = client.Subscribe();

  channel.on("data", (data: any) => {
    global.console.log(data);
  });
}

function main() {
  switch (argv[0]) {
    case "-help":
      help();
      break;
    case "-subscribe":
      subscribe();
      break;
    case "-add":
      break;
    case "-view":
      if (!argv[1]) {
        global.console.log("No node id");
        return;
      }
      getNode(argv[1]);
      break;
    case "-update":
      break;
    case "-delete":
      break;
    case "-all":
      getNodes();
      break;
    default:
      help();
  }
}

main();
