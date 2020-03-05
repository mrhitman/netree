// package: api
// file: graph.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as graph_pb from "./graph_pb";

interface IGraphService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getNode: IGraphService_IGetNode;
    getNodes: IGraphService_IGetNodes;
    addNode: IGraphService_IAddNode;
    updateNode: IGraphService_IUpdateNode;
    deleteNode: IGraphService_IDeleteNode;
}

interface IGraphService_IGetNode extends grpc.MethodDefinition<graph_pb.GetNodeRequest, graph_pb.GetNodeResponse> {
    path: string; // "/api.Graph/GetNode"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<graph_pb.GetNodeRequest>;
    requestDeserialize: grpc.deserialize<graph_pb.GetNodeRequest>;
    responseSerialize: grpc.serialize<graph_pb.GetNodeResponse>;
    responseDeserialize: grpc.deserialize<graph_pb.GetNodeResponse>;
}
interface IGraphService_IGetNodes extends grpc.MethodDefinition<graph_pb.GetNodesRequest, graph_pb.GetNodesResponse> {
    path: string; // "/api.Graph/GetNodes"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<graph_pb.GetNodesRequest>;
    requestDeserialize: grpc.deserialize<graph_pb.GetNodesRequest>;
    responseSerialize: grpc.serialize<graph_pb.GetNodesResponse>;
    responseDeserialize: grpc.deserialize<graph_pb.GetNodesResponse>;
}
interface IGraphService_IAddNode extends grpc.MethodDefinition<graph_pb.AddNodeRequest, graph_pb.GetNodeResponse> {
    path: string; // "/api.Graph/AddNode"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<graph_pb.AddNodeRequest>;
    requestDeserialize: grpc.deserialize<graph_pb.AddNodeRequest>;
    responseSerialize: grpc.serialize<graph_pb.GetNodeResponse>;
    responseDeserialize: grpc.deserialize<graph_pb.GetNodeResponse>;
}
interface IGraphService_IUpdateNode extends grpc.MethodDefinition<graph_pb.UpdateNodeRequest, graph_pb.GetNodeResponse> {
    path: string; // "/api.Graph/UpdateNode"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<graph_pb.UpdateNodeRequest>;
    requestDeserialize: grpc.deserialize<graph_pb.UpdateNodeRequest>;
    responseSerialize: grpc.serialize<graph_pb.GetNodeResponse>;
    responseDeserialize: grpc.deserialize<graph_pb.GetNodeResponse>;
}
interface IGraphService_IDeleteNode extends grpc.MethodDefinition<graph_pb.GetNodeRequest, graph_pb.DeleteNodeResponse> {
    path: string; // "/api.Graph/DeleteNode"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<graph_pb.GetNodeRequest>;
    requestDeserialize: grpc.deserialize<graph_pb.GetNodeRequest>;
    responseSerialize: grpc.serialize<graph_pb.DeleteNodeResponse>;
    responseDeserialize: grpc.deserialize<graph_pb.DeleteNodeResponse>;
}

export const GraphService: IGraphService;

export interface IGraphServer {
    getNode: grpc.handleUnaryCall<graph_pb.GetNodeRequest, graph_pb.GetNodeResponse>;
    getNodes: grpc.handleUnaryCall<graph_pb.GetNodesRequest, graph_pb.GetNodesResponse>;
    addNode: grpc.handleUnaryCall<graph_pb.AddNodeRequest, graph_pb.GetNodeResponse>;
    updateNode: grpc.handleUnaryCall<graph_pb.UpdateNodeRequest, graph_pb.GetNodeResponse>;
    deleteNode: grpc.handleUnaryCall<graph_pb.GetNodeRequest, graph_pb.DeleteNodeResponse>;
}

export interface IGraphClient {
    getNode(request: graph_pb.GetNodeRequest, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    getNode(request: graph_pb.GetNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    getNode(request: graph_pb.GetNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    getNodes(request: graph_pb.GetNodesRequest, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodesResponse) => void): grpc.ClientUnaryCall;
    getNodes(request: graph_pb.GetNodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodesResponse) => void): grpc.ClientUnaryCall;
    getNodes(request: graph_pb.GetNodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodesResponse) => void): grpc.ClientUnaryCall;
    addNode(request: graph_pb.AddNodeRequest, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    addNode(request: graph_pb.AddNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    addNode(request: graph_pb.AddNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    updateNode(request: graph_pb.UpdateNodeRequest, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    updateNode(request: graph_pb.UpdateNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    updateNode(request: graph_pb.UpdateNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    deleteNode(request: graph_pb.GetNodeRequest, callback: (error: grpc.ServiceError | null, response: graph_pb.DeleteNodeResponse) => void): grpc.ClientUnaryCall;
    deleteNode(request: graph_pb.GetNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: graph_pb.DeleteNodeResponse) => void): grpc.ClientUnaryCall;
    deleteNode(request: graph_pb.GetNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: graph_pb.DeleteNodeResponse) => void): grpc.ClientUnaryCall;
}

export class GraphClient extends grpc.Client implements IGraphClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getNode(request: graph_pb.GetNodeRequest, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    public getNode(request: graph_pb.GetNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    public getNode(request: graph_pb.GetNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    public getNodes(request: graph_pb.GetNodesRequest, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodesResponse) => void): grpc.ClientUnaryCall;
    public getNodes(request: graph_pb.GetNodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodesResponse) => void): grpc.ClientUnaryCall;
    public getNodes(request: graph_pb.GetNodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodesResponse) => void): grpc.ClientUnaryCall;
    public addNode(request: graph_pb.AddNodeRequest, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    public addNode(request: graph_pb.AddNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    public addNode(request: graph_pb.AddNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    public updateNode(request: graph_pb.UpdateNodeRequest, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    public updateNode(request: graph_pb.UpdateNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    public updateNode(request: graph_pb.UpdateNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: graph_pb.GetNodeResponse) => void): grpc.ClientUnaryCall;
    public deleteNode(request: graph_pb.GetNodeRequest, callback: (error: grpc.ServiceError | null, response: graph_pb.DeleteNodeResponse) => void): grpc.ClientUnaryCall;
    public deleteNode(request: graph_pb.GetNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: graph_pb.DeleteNodeResponse) => void): grpc.ClientUnaryCall;
    public deleteNode(request: graph_pb.GetNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: graph_pb.DeleteNodeResponse) => void): grpc.ClientUnaryCall;
}
