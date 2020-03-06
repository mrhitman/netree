// package: api
// file: graph.proto

import * as jspb from "google-protobuf";

export class SubsribeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubsribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubsribeRequest): SubsribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubsribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubsribeRequest;
  static deserializeBinaryFromReader(message: SubsribeRequest, reader: jspb.BinaryReader): SubsribeRequest;
}

export namespace SubsribeRequest {
  export type AsObject = {
  }
}

export class SubsribeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubsribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubsribeResponse): SubsribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubsribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubsribeResponse;
  static deserializeBinaryFromReader(message: SubsribeResponse, reader: jspb.BinaryReader): SubsribeResponse;
}

export namespace SubsribeResponse {
  export type AsObject = {
  }
}

export class Node extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getParentId(): string;
  setParentId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Node.AsObject;
  static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Node;
  static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
  export type AsObject = {
    id: string,
    name: string,
    parentId: string,
  }
}

export class GetNodeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeRequest): GetNodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeRequest;
  static deserializeBinaryFromReader(message: GetNodeRequest, reader: jspb.BinaryReader): GetNodeRequest;
}

export namespace GetNodeRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetNodeResponse extends jspb.Message {
  hasNode(): boolean;
  clearNode(): void;
  getNode(): Node | undefined;
  setNode(value?: Node): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeResponse): GetNodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeResponse;
  static deserializeBinaryFromReader(message: GetNodeResponse, reader: jspb.BinaryReader): GetNodeResponse;
}

export namespace GetNodeResponse {
  export type AsObject = {
    node?: Node.AsObject,
  }
}

export class GetNodesRequest extends jspb.Message {
  getParentId(): string;
  setParentId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodesRequest): GetNodesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodesRequest;
  static deserializeBinaryFromReader(message: GetNodesRequest, reader: jspb.BinaryReader): GetNodesRequest;
}

export namespace GetNodesRequest {
  export type AsObject = {
    parentId: string,
  }
}

export class GetNodesResponse extends jspb.Message {
  clearNodeList(): void;
  getNodeList(): Array<Node>;
  setNodeList(value: Array<Node>): void;
  addNode(value?: Node, index?: number): Node;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodesResponse): GetNodesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodesResponse;
  static deserializeBinaryFromReader(message: GetNodesResponse, reader: jspb.BinaryReader): GetNodesResponse;
}

export namespace GetNodesResponse {
  export type AsObject = {
    nodeList: Array<Node.AsObject>,
  }
}

export class AddNodeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getParentId(): string;
  setParentId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddNodeRequest): AddNodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddNodeRequest;
  static deserializeBinaryFromReader(message: AddNodeRequest, reader: jspb.BinaryReader): AddNodeRequest;
}

export namespace AddNodeRequest {
  export type AsObject = {
    name: string,
    parentId: string,
  }
}

export class UpdateNodeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasNode(): boolean;
  clearNode(): void;
  getNode(): Node | undefined;
  setNode(value?: Node): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNodeRequest): UpdateNodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNodeRequest;
  static deserializeBinaryFromReader(message: UpdateNodeRequest, reader: jspb.BinaryReader): UpdateNodeRequest;
}

export namespace UpdateNodeRequest {
  export type AsObject = {
    id: string,
    node?: Node.AsObject,
  }
}

export class DeleteNodeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNodeRequest): DeleteNodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNodeRequest;
  static deserializeBinaryFromReader(message: DeleteNodeRequest, reader: jspb.BinaryReader): DeleteNodeRequest;
}

export namespace DeleteNodeRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteNodeResponse extends jspb.Message {
  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNodeResponse): DeleteNodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNodeResponse;
  static deserializeBinaryFromReader(message: DeleteNodeResponse, reader: jspb.BinaryReader): DeleteNodeResponse;
}

export namespace DeleteNodeResponse {
  export type AsObject = {
    deleted: boolean,
  }
}

