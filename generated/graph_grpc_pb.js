// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var graph_pb = require('./graph_pb.js');

function serialize_api_AddNodeRequest(arg) {
  if (!(arg instanceof graph_pb.AddNodeRequest)) {
    throw new Error('Expected argument of type api.AddNodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_AddNodeRequest(buffer_arg) {
  return graph_pb.AddNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteNodeRequest(arg) {
  if (!(arg instanceof graph_pb.DeleteNodeRequest)) {
    throw new Error('Expected argument of type api.DeleteNodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteNodeRequest(buffer_arg) {
  return graph_pb.DeleteNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteNodeResponse(arg) {
  if (!(arg instanceof graph_pb.DeleteNodeResponse)) {
    throw new Error('Expected argument of type api.DeleteNodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteNodeResponse(buffer_arg) {
  return graph_pb.DeleteNodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetNodeRequest(arg) {
  if (!(arg instanceof graph_pb.GetNodeRequest)) {
    throw new Error('Expected argument of type api.GetNodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetNodeRequest(buffer_arg) {
  return graph_pb.GetNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetNodeResponse(arg) {
  if (!(arg instanceof graph_pb.GetNodeResponse)) {
    throw new Error('Expected argument of type api.GetNodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetNodeResponse(buffer_arg) {
  return graph_pb.GetNodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetNodesRequest(arg) {
  if (!(arg instanceof graph_pb.GetNodesRequest)) {
    throw new Error('Expected argument of type api.GetNodesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetNodesRequest(buffer_arg) {
  return graph_pb.GetNodesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetNodesResponse(arg) {
  if (!(arg instanceof graph_pb.GetNodesResponse)) {
    throw new Error('Expected argument of type api.GetNodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetNodesResponse(buffer_arg) {
  return graph_pb.GetNodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_SubsribeRequest(arg) {
  if (!(arg instanceof graph_pb.SubsribeRequest)) {
    throw new Error('Expected argument of type api.SubsribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_SubsribeRequest(buffer_arg) {
  return graph_pb.SubsribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_SubsribeResponse(arg) {
  if (!(arg instanceof graph_pb.SubsribeResponse)) {
    throw new Error('Expected argument of type api.SubsribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_SubsribeResponse(buffer_arg) {
  return graph_pb.SubsribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateNodeRequest(arg) {
  if (!(arg instanceof graph_pb.UpdateNodeRequest)) {
    throw new Error('Expected argument of type api.UpdateNodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateNodeRequest(buffer_arg) {
  return graph_pb.UpdateNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GraphService = exports.GraphService = {
  getNode: {
    path: '/api.Graph/GetNode',
    requestStream: false,
    responseStream: false,
    requestType: graph_pb.GetNodeRequest,
    responseType: graph_pb.GetNodeResponse,
    requestSerialize: serialize_api_GetNodeRequest,
    requestDeserialize: deserialize_api_GetNodeRequest,
    responseSerialize: serialize_api_GetNodeResponse,
    responseDeserialize: deserialize_api_GetNodeResponse,
  },
  getNodes: {
    path: '/api.Graph/GetNodes',
    requestStream: false,
    responseStream: true,
    requestType: graph_pb.GetNodesRequest,
    responseType: graph_pb.GetNodesResponse,
    requestSerialize: serialize_api_GetNodesRequest,
    requestDeserialize: deserialize_api_GetNodesRequest,
    responseSerialize: serialize_api_GetNodesResponse,
    responseDeserialize: deserialize_api_GetNodesResponse,
  },
  addNode: {
    path: '/api.Graph/AddNode',
    requestStream: false,
    responseStream: false,
    requestType: graph_pb.AddNodeRequest,
    responseType: graph_pb.GetNodeResponse,
    requestSerialize: serialize_api_AddNodeRequest,
    requestDeserialize: deserialize_api_AddNodeRequest,
    responseSerialize: serialize_api_GetNodeResponse,
    responseDeserialize: deserialize_api_GetNodeResponse,
  },
  updateNode: {
    path: '/api.Graph/UpdateNode',
    requestStream: false,
    responseStream: false,
    requestType: graph_pb.UpdateNodeRequest,
    responseType: graph_pb.GetNodeResponse,
    requestSerialize: serialize_api_UpdateNodeRequest,
    requestDeserialize: deserialize_api_UpdateNodeRequest,
    responseSerialize: serialize_api_GetNodeResponse,
    responseDeserialize: deserialize_api_GetNodeResponse,
  },
  deleteNode: {
    path: '/api.Graph/DeleteNode',
    requestStream: false,
    responseStream: false,
    requestType: graph_pb.DeleteNodeRequest,
    responseType: graph_pb.DeleteNodeResponse,
    requestSerialize: serialize_api_DeleteNodeRequest,
    requestDeserialize: deserialize_api_DeleteNodeRequest,
    responseSerialize: serialize_api_DeleteNodeResponse,
    responseDeserialize: deserialize_api_DeleteNodeResponse,
  },
  subscribe: {
    path: '/api.Graph/Subscribe',
    requestStream: false,
    responseStream: true,
    requestType: graph_pb.SubsribeRequest,
    responseType: graph_pb.SubsribeResponse,
    requestSerialize: serialize_api_SubsribeRequest,
    requestDeserialize: deserialize_api_SubsribeRequest,
    responseSerialize: serialize_api_SubsribeResponse,
    responseDeserialize: deserialize_api_SubsribeResponse,
  },
};

exports.GraphClient = grpc.makeGenericClientConstructor(GraphService);
