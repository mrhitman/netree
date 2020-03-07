import { config } from "dotenv";
import { credentials } from "grpc";
import services from "./generated/graph_grpc_pb";
import {
  AddNodeRequest,
  DeleteNodeRequest,
  GetNodeRequest,
  GetNodesRequest,
  GetNodesResponse,
  Node,
  SubsribeRequest,
  SubsribeResponse,
  UpdateNodeRequest
} from "./generated/graph_pb";

config();

const argv = process.argv.slice(2);

function help() {
  global.console.log(` -l, -all, -list           # Get All Graph Nodes`);
  global.console.log(` -add, -a <name> <parent>  # To Add Graph Node`);
  global.console.log(` -view, -v <id>            # To Add Graph Node`);
  global.console.log(` -d, -delete <id>          # To Delete Graph Node`);
  global.console.log(` -subscribe, -s            # To subscribe`);
  global.console.log(` -h, -help                 # This info`);
  process.exit(0);
}

function createClient() {
  return new services.GraphClient(
    process.env.HOST || "127.0.0.1:9090",
    credentials.createInsecure()
  );
}

async function getNodes() {
  const client = createClient();
  const request = new GetNodesRequest();
  const channel = client.getNodes(request);

  channel.on("data", (data: GetNodesResponse) => {
    global.console.log("GET NODES CHUNK: ", data.getNodeList());
  });

  channel.on("end", () => process.exit(0));
}

async function getNode(id: string) {
  const client = createClient();
  const request = new GetNodeRequest();

  request.setId(id);
  client.getNode(request, function(err, response) {
    if (err || !response) {
      return;
    }

    global.console.log("GET NODE:", response.getNode(), err);
  });
}

async function deleteNode(id: string) {
  const client = createClient();
  const request = new DeleteNodeRequest();

  request.setId(id);
  client.deleteNode(request, function(err, response) {
    if (err || !response) {
      return;
    }

    global.console.log("DELETE NODE: ", response.getDeleted(), err);
  });
}

async function addNode(name: string, parent: string) {
  const client = createClient();
  const request = new AddNodeRequest();

  request.setName(name);
  request.setParentId(parent);

  client.addNode(request, function(err, response) {
    if (err || !response) {
      return;
    }

    global.console.log("ADD NODE:", response.getNode(), err);
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

  client.updateNode(request, function(err, response) {
    if (err || !response) {
      return;
    }

    global.console.log("UPDATE NODE:", response, err);
  });
}

async function subscribe() {
  const client = createClient();
  const request = new SubsribeRequest();
  const channel = client.subscribe(request);
  global.console.log("SUBSCRIBE FOR UPDATES");

  channel.on("data", (data: SubsribeResponse) => {
    global.console.log("GET NODE NOTIFY: ", data.getCommand(), data.getNode());
  });
}

function main() {
  switch (argv[0]) {
    case "-h":
    case "-help":
      help();
      break;
    case "-subscribe":
    case "-s":
      subscribe();
      break;
    case "-add":
    case "-a":
      if (!argv[1]) {
        global.console.log("No node name");
        return;
      }
      addNode(argv[1], argv[2]);
      break;
    case "-view":
    case "-v":
      if (!argv[1]) {
        global.console.log("No node id");
        return;
      }
      getNode(argv[1]);
      break;
    case "-update":
    case "-u":
      if (!argv[1] || !argv[2]) {
        global.console.log("No node name");
        return;
      }
      updateNode(argv[1], argv[2], argv[3]);
      break;
    case "-d":
    case "-delete":
      if (!argv[1]) {
        global.console.log("No node id");
        return;
      }
      deleteNode(argv[1]);
      break;
    case "-all":
    case "-list":
    case "-l":
      getNodes();
      break;
    default:
      help();
  }
}

main();
