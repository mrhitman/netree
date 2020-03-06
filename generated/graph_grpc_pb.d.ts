// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: graph.proto

import * as graph_pb from "./graph_pb";
import * as grpc from "grpc";

interface IGraphService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getNode: grpc.MethodDefinition<graph_pb.GetNodeRequest, graph_pb.GetNodeResponse>;
  getNodes: grpc.MethodDefinition<graph_pb.GetNodesRequest, graph_pb.GetNodesResponse>;
  addNode: grpc.MethodDefinition<graph_pb.AddNodeRequest, graph_pb.GetNodeResponse>;
  updateNode: grpc.MethodDefinition<graph_pb.UpdateNodeRequest, graph_pb.GetNodeResponse>;
  deleteNode: grpc.MethodDefinition<graph_pb.DeleteNodeRequest, graph_pb.DeleteNodeResponse>;
  subscribe: grpc.MethodDefinition<graph_pb.SubsribeRequest, graph_pb.SubsribeResponse>;
}

export const GraphService: IGraphService;

export class GraphClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getNode(argument: graph_pb.GetNodeRequest, callback: grpc.requestCallback<graph_pb.GetNodeResponse>): grpc.ClientUnaryCall;
  getNode(argument: graph_pb.GetNodeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<graph_pb.GetNodeResponse>): grpc.ClientUnaryCall;
  getNode(argument: graph_pb.GetNodeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<graph_pb.GetNodeResponse>): grpc.ClientUnaryCall;
  getNodes(argument: graph_pb.GetNodesRequest, callback: grpc.requestCallback<graph_pb.GetNodesResponse>): grpc.ClientUnaryCall;
  getNodes(argument: graph_pb.GetNodesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<graph_pb.GetNodesResponse>): grpc.ClientUnaryCall;
  getNodes(argument: graph_pb.GetNodesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<graph_pb.GetNodesResponse>): grpc.ClientUnaryCall;
  addNode(argument: graph_pb.AddNodeRequest, callback: grpc.requestCallback<graph_pb.GetNodeResponse>): grpc.ClientUnaryCall;
  addNode(argument: graph_pb.AddNodeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<graph_pb.GetNodeResponse>): grpc.ClientUnaryCall;
  addNode(argument: graph_pb.AddNodeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<graph_pb.GetNodeResponse>): grpc.ClientUnaryCall;
  updateNode(argument: graph_pb.UpdateNodeRequest, callback: grpc.requestCallback<graph_pb.GetNodeResponse>): grpc.ClientUnaryCall;
  updateNode(argument: graph_pb.UpdateNodeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<graph_pb.GetNodeResponse>): grpc.ClientUnaryCall;
  updateNode(argument: graph_pb.UpdateNodeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<graph_pb.GetNodeResponse>): grpc.ClientUnaryCall;
  deleteNode(argument: graph_pb.DeleteNodeRequest, callback: grpc.requestCallback<graph_pb.DeleteNodeResponse>): grpc.ClientUnaryCall;
  deleteNode(argument: graph_pb.DeleteNodeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<graph_pb.DeleteNodeResponse>): grpc.ClientUnaryCall;
  deleteNode(argument: graph_pb.DeleteNodeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<graph_pb.DeleteNodeResponse>): grpc.ClientUnaryCall;
  subscribe(argument: graph_pb.SubsribeRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<graph_pb.SubsribeResponse>;
  subscribe(argument: graph_pb.SubsribeRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<graph_pb.SubsribeResponse>;
}
