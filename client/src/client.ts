import { credentials, loadPackageDefinition } from "grpc";
import {
  AddNodeRequest,
  DeleteNodeRequest,
  DeleteNodeResponse,
  GetNodeRequest,
  GetNodeResponse,
  Node,
  UpdateNodeRequest
} from "../../generated/graph_pb";
import services from "../../generated/graph_grpc_pb";
import { SubsribeRequest } from "../../generated/graph_pb";
import {
  GetNodesRequest,
  SubsribeResponse,
  GetNodesResponse
} from "../../generated/graph_pb";

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

function createClient() {
  return new services.GraphClient(
    "127.0.0.1:9090",
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
