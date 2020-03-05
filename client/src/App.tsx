import React from "react";
import * as messages from "./generated/graph_pb";
import * as services from "./generated/graph_grpc_pb";

var grpc = require("grpc");

const App: React.FC = () => {
  const client = new services.GraphClient(
    "localhost:8080",
    grpc.credentials.createInsecure()
  );

  const request = new messages.GetNodesRequest();
  client.getNodes(request, function(err, response) {
    console.log("Greeting:", response?.getNodeList());
  });

  return (
    <div className="App">
      <header className="App-header">React App</header>
    </div>
  );
};

export default App;
