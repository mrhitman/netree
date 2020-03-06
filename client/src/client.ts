import * as protoLoader from "@grpc/proto-loader";
import { credentials, loadPackageDefinition } from "grpc";
import { DeleteNodeResponse } from "./generated/graph_pb";
import {
  UpdateNodeRequest,
  Node,
  DeleteNodeRequest
} from "./generated/graph_pb";
import {
  AddNodeRequest,
  GetNodeRequest,
  GetNodeResponse,
  GetNodesRequest,
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

async function deleteNode(id: string) {
  const client = createClient();
  const request = new DeleteNodeRequest();

  request.setId(id);
  client.deleteNode(request, function(
    err: Error,
    response: DeleteNodeResponse
  ) {
    global.console.log("DELETE NODE:", response, err);
  });
}

async function addNode(name: string, parent: string) {
  const client = createClient();
  const request = new AddNodeRequest();

  request.setName(name);
  request.setParentId(parent);
  client.addNode(request, function(err: Error, response: GetNodeResponse) {
    global.console.log("ADD NODE:", response, err);
  });
}

async function updateNode(id: string, name: string, parent: string) {
  const client = createClient();
  const request = new UpdateNodeRequest();

  const node = new Node();
  node.setId(id);
  node.setName(name);
  node.setParentId(parent);
  request.setId(id);
  request.setNode(node);
  client.addNode(request, function(err: Error, response: GetNodeResponse) {
    global.console.log("UPDATE NODE:", response, err);
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
      if (!argv[1]) {
        global.console.log("No node name");
        return;
      }
      addNode(argv[1], argv[2]);
      break;
    case "-view":
      if (!argv[1]) {
        global.console.log("No node id");
        return;
      }
      getNode(argv[1]);
      break;
    case "-update":
      if (!argv[1] || !argv[2]) {
        global.console.log("No node name");
        return;
      }
      updateNode(argv[1], argv[2], argv[3]);
      break;
    case "-delete":
      if (!argv[1]) {
        global.console.log("No node id");
        return;
      }
      deleteNode(argv[1]);
      break;
    case "-all":
      getNodes();
      break;
    default:
      help();
  }
}

main();
