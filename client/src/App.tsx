import React from "react";
import { grpc } from "@improbable-eng/grpc-web";
import { Graph } from "./generated/graph_pb_service.js";
import { GetNodesRequest } from "./generated/graph_pb";

const host = "http://127.0.0.1:3001";

const request = new GetNodesRequest();
grpc.unary(Graph.GetNodes, {
  request,
  host,
  onEnd: res => {
    console.log(res);
  }
});

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">React App</header>
    </div>
  );
};

export default App;
