#!/bin/bash

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"
OUT_DIR="./server/src/generated"

echo "Compiling protobuf definitions"
protoc \
    --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out=import_style=commonjs,binary:${OUT_DIR} \
    --ts_out=service=grpc-node:${OUT_DIR} \
    --grpc_out="${OUT_DIR}" \
    graph.proto

OUT_DIR="./proxy/src/generated"
protoc \
    --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out=import_style=commonjs,binary:${OUT_DIR} \
    --ts_out=service=grpc-node:${OUT_DIR} \
    --grpc_out="${OUT_DIR}" \
    graph.proto


OUT_DIR="./client/src/generated"
protoc \
  --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
  --js_out=import_style=commonjs,binary:${OUT_DIR} \
  --ts_out=service=grpc-web:${OUT_DIR} \
    graph.proto