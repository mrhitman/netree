import * as pb_1 from "google-protobuf";
import * as grpc_1 from "grpc";
export namespace api {
    export class Node extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            name?: string;
            parent_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.id = data.id;
                this.name = data.name;
                this.parent_id = data.parent_id;
            }
        }
        get id(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get name(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get parent_id(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string | undefined;
        }
        set parent_id(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        toObject() {
            return {
                id: this.id,
                name: this.name,
                parent_id: this.parent_id
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id)
                writer.writeString(1, this.id);
            if (this.name)
                writer.writeString(2, this.name);
            if (this.parent_id)
                writer.writeString(3, this.parent_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Node {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Node();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    case 3:
                        message.parent_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class GetNodeRequest extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.id = data.id;
            }
        }
        get id(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        toObject() {
            return {
                id: this.id
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id)
                writer.writeString(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetNodeRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new GetNodeRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class GetNodeResponse extends pb_1.Message {
        constructor(data?: any[] | {
            node?: Node;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.node = data.node;
            }
        }
        get node(): Node | undefined {
            return pb_1.Message.getWrapperField(this, Node, 1) as Node | undefined;
        }
        set node(value: Node) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        toObject() {
            return {
                node: this.node && this.node.toObject()
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.node)
                writer.writeMessage(1, this.node, () => this.node.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetNodeResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new GetNodeResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.node, () => message.node = Node.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class GetNodesRequest extends pb_1.Message {
        constructor(data?: any[] | {
            parent_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.parent_id = data.parent_id;
            }
        }
        get parent_id(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set parent_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        toObject() {
            return {
                parent_id: this.parent_id
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.parent_id)
                writer.writeString(1, this.parent_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetNodesRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new GetNodesRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.parent_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class GetNodesResponse extends pb_1.Message {
        constructor(data?: any[] | {
            node?: Node[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.node = data.node;
            }
        }
        get node(): Node[] {
            return pb_1.Message.getRepeatedWrapperField(this, Node, 1) as Node[];
        }
        set node(value: Node[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        toObject() {
            return {
                node: this.node && this.node.toObject()
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.node)
                writer.writeRepeatedMessage(1, this.node, (item: Node) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetNodesResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new GetNodesResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.node, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Node.deserialize(reader), Node));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class AddNodeRequest extends pb_1.Message {
        constructor(data?: any[] | {
            name?: string;
            parent_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.name = data.name;
                this.parent_id = data.parent_id;
            }
        }
        get name(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get parent_id(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
        }
        set parent_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            return {
                name: this.name,
                parent_id: this.parent_id
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name)
                writer.writeString(1, this.name);
            if (this.parent_id)
                writer.writeString(2, this.parent_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AddNodeRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new AddNodeRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.parent_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class UpdateNodeRequest extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            node?: Node;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.id = data.id;
                this.node = data.node;
            }
        }
        get id(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get node(): Node | undefined {
            return pb_1.Message.getWrapperField(this, Node, 2) as Node | undefined;
        }
        set node(value: Node) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        toObject() {
            return {
                id: this.id,
                node: this.node && this.node.toObject()
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id)
                writer.writeString(1, this.id);
            if (this.node)
                writer.writeMessage(2, this.node, () => this.node.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UpdateNodeRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new UpdateNodeRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.node, () => message.node = Node.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class DeleteNodeRequest extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.id = data.id;
            }
        }
        get id(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        toObject() {
            return {
                id: this.id
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id)
                writer.writeString(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeleteNodeRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DeleteNodeRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class DeleteNodeResponse extends pb_1.Message {
        constructor(data?: any[] | {
            deleted?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.deleted = data.deleted;
            }
        }
        get deleted(): boolean | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as boolean | undefined;
        }
        set deleted(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        toObject() {
            return {
                deleted: this.deleted
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.deleted)
                writer.writeBool(1, this.deleted);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeleteNodeResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DeleteNodeResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.deleted = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export var Graph = {
        GetNode: {
            path: "/api/Graph/GetNode",
            requestStream: false,
            responseStream: false,
            requestType: api.GetNodeRequest,
            responseType: api.GetNodeResponse,
            requestSerialize: (message: GetNodeRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => GetNodeRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: GetNodeResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => GetNodeResponse.deserialize(new Uint8Array(bytes))
        },
        GetNodes: {
            path: "/api/Graph/GetNodes",
            requestStream: false,
            responseStream: false,
            requestType: api.GetNodesRequest,
            responseType: api.GetNodesResponse,
            requestSerialize: (message: GetNodesRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => GetNodesRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: GetNodesResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => GetNodesResponse.deserialize(new Uint8Array(bytes))
        },
        AddNode: {
            path: "/api/Graph/AddNode",
            requestStream: false,
            responseStream: false,
            requestType: api.AddNodeRequest,
            responseType: api.GetNodeResponse,
            requestSerialize: (message: AddNodeRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => AddNodeRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: GetNodeResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => GetNodeResponse.deserialize(new Uint8Array(bytes))
        },
        UpdateNode: {
            path: "/api/Graph/UpdateNode",
            requestStream: false,
            responseStream: false,
            requestType: api.UpdateNodeRequest,
            responseType: api.GetNodeResponse,
            requestSerialize: (message: UpdateNodeRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => UpdateNodeRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: GetNodeResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => GetNodeResponse.deserialize(new Uint8Array(bytes))
        },
        DeleteNode: {
            path: "/api/Graph/DeleteNode",
            requestStream: false,
            responseStream: false,
            requestType: api.DeleteNodeRequest,
            responseType: api.DeleteNodeResponse,
            requestSerialize: (message: DeleteNodeRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => DeleteNodeRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: DeleteNodeResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => DeleteNodeResponse.deserialize(new Uint8Array(bytes))
        }
    };
    export class GraphClient extends grpc_1.makeGenericClientConstructor(Graph, "Graph", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials) {
            super(address, credentials)
        }
    }
}
