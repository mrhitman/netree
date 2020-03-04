// GENERATED CODE -- DO NOT EDIT!

// package: helloworld
// file: protos/hello.proto

import * as protos_hello_pb from "../protos/hello_pb";
import * as grpc from "grpc";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: grpc.MethodDefinition<protos_hello_pb.HelloRequest, protos_hello_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export class GreeterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sayHello(argument: protos_hello_pb.HelloRequest, callback: grpc.requestCallback<protos_hello_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: protos_hello_pb.HelloRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_hello_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: protos_hello_pb.HelloRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_hello_pb.HelloReply>): grpc.ClientUnaryCall;
}
