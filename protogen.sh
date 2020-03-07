#!/bin/bash

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"
OUT_DIR="./generated"

echo "Compiling protobuf definitions"

rm -rf ${OUT_DIR}
mkdir ${OUT_DIR}


./node_modules/.bin/grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./generated \
  --grpc_out='./generated' \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  -I ./generated/ \
  -I ./ \
 *.proto

./node_modules/.bin/grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=./generated \
  -I ./generated \
  -I ./ \
 *.proto


 rm -rf ./server/src/generated
 rm -rf ./client/src/generated
 cp -R ${OUT_DIR} ./server/src/generated
 cp -R ${OUT_DIR} ./client/src/generated
 rm -rf ${OUT_DIR}