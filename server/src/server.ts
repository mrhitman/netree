import { config } from 'dotenv';
import { Server, ServerCredentials, loadPackageDefinition } from 'grpc';
import { GraphFileDataProvider } from './components/graph-data-provider';
import * as graph from './generated/graph_grpc_pb.js';
import * as protoLoader from '@grpc/proto-loader';
import NodeDefinition from './implementations/node-service';

config();

export function createServer() {
	const packageDefinition = protoLoader.loadSync('../graph.proto');
	const graphProto = loadPackageDefinition(packageDefinition).api as any;

	const server = new Server();
	const implementation = new NodeDefinition(new GraphFileDataProvider('data.txt'));

	server.addService<graph.IGraphService>(graph.GraphService, implementation);
	return server;
}

if (!module.parent) {
	const port = process.env.PORT || 3000;
	const server = createServer();
	server.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure());
	server.start();
	global.console.log(`Server binded to 0.0.0.0:${port}`);
}
