// package: api
// file: graph.proto

import * as graph_pb from "./graph_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GraphGetNode = {
  readonly methodName: string;
  readonly service: typeof Graph;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof graph_pb.GetNodeRequest;
  readonly responseType: typeof graph_pb.GetNodeResponse;
};

type GraphGetNodes = {
  readonly methodName: string;
  readonly service: typeof Graph;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof graph_pb.GetNodesRequest;
  readonly responseType: typeof graph_pb.GetNodesResponse;
};

type GraphAddNode = {
  readonly methodName: string;
  readonly service: typeof Graph;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof graph_pb.AddNodeRequest;
  readonly responseType: typeof graph_pb.GetNodeResponse;
};

type GraphUpdateNode = {
  readonly methodName: string;
  readonly service: typeof Graph;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof graph_pb.UpdateNodeRequest;
  readonly responseType: typeof graph_pb.GetNodeResponse;
};

type GraphDeleteNode = {
  readonly methodName: string;
  readonly service: typeof Graph;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof graph_pb.GetNodeRequest;
  readonly responseType: typeof graph_pb.DeleteNodeResponse;
};

export class Graph {
  static readonly serviceName: string;
  static readonly GetNode: GraphGetNode;
  static readonly GetNodes: GraphGetNodes;
  static readonly AddNode: GraphAddNode;
  static readonly UpdateNode: GraphUpdateNode;
  static readonly DeleteNode: GraphDeleteNode;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class GraphClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getNode(
    requestMessage: graph_pb.GetNodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: graph_pb.GetNodeResponse|null) => void
  ): UnaryResponse;
  getNode(
    requestMessage: graph_pb.GetNodeRequest,
    callback: (error: ServiceError|null, responseMessage: graph_pb.GetNodeResponse|null) => void
  ): UnaryResponse;
  getNodes(
    requestMessage: graph_pb.GetNodesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: graph_pb.GetNodesResponse|null) => void
  ): UnaryResponse;
  getNodes(
    requestMessage: graph_pb.GetNodesRequest,
    callback: (error: ServiceError|null, responseMessage: graph_pb.GetNodesResponse|null) => void
  ): UnaryResponse;
  addNode(
    requestMessage: graph_pb.AddNodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: graph_pb.GetNodeResponse|null) => void
  ): UnaryResponse;
  addNode(
    requestMessage: graph_pb.AddNodeRequest,
    callback: (error: ServiceError|null, responseMessage: graph_pb.GetNodeResponse|null) => void
  ): UnaryResponse;
  updateNode(
    requestMessage: graph_pb.UpdateNodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: graph_pb.GetNodeResponse|null) => void
  ): UnaryResponse;
  updateNode(
    requestMessage: graph_pb.UpdateNodeRequest,
    callback: (error: ServiceError|null, responseMessage: graph_pb.GetNodeResponse|null) => void
  ): UnaryResponse;
  deleteNode(
    requestMessage: graph_pb.GetNodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: graph_pb.DeleteNodeResponse|null) => void
  ): UnaryResponse;
  deleteNode(
    requestMessage: graph_pb.GetNodeRequest,
    callback: (error: ServiceError|null, responseMessage: graph_pb.DeleteNodeResponse|null) => void
  ): UnaryResponse;
}

