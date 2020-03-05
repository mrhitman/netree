// package: api
// file: graph.proto

var graph_pb = require("./graph_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Graph = (function () {
  function Graph() {}
  Graph.serviceName = "api.Graph";
  return Graph;
}());

Graph.GetNode = {
  methodName: "GetNode",
  service: Graph,
  requestStream: false,
  responseStream: false,
  requestType: graph_pb.GetNodeRequest,
  responseType: graph_pb.GetNodeResponse
};

Graph.GetNodes = {
  methodName: "GetNodes",
  service: Graph,
  requestStream: false,
  responseStream: false,
  requestType: graph_pb.GetNodesRequest,
  responseType: graph_pb.GetNodesResponse
};

Graph.AddNode = {
  methodName: "AddNode",
  service: Graph,
  requestStream: false,
  responseStream: false,
  requestType: graph_pb.AddNodeRequest,
  responseType: graph_pb.GetNodeResponse
};

Graph.UpdateNode = {
  methodName: "UpdateNode",
  service: Graph,
  requestStream: false,
  responseStream: false,
  requestType: graph_pb.UpdateNodeRequest,
  responseType: graph_pb.GetNodeResponse
};

Graph.DeleteNode = {
  methodName: "DeleteNode",
  service: Graph,
  requestStream: false,
  responseStream: false,
  requestType: graph_pb.GetNodeRequest,
  responseType: graph_pb.DeleteNodeResponse
};

exports.Graph = Graph;

function GraphClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GraphClient.prototype.getNode = function getNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Graph.GetNode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GraphClient.prototype.getNodes = function getNodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Graph.GetNodes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GraphClient.prototype.addNode = function addNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Graph.AddNode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GraphClient.prototype.updateNode = function updateNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Graph.UpdateNode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GraphClient.prototype.deleteNode = function deleteNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Graph.DeleteNode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.GraphClient = GraphClient;

