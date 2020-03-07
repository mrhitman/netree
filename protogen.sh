#!/bin/bash

PROTOC="./node_modules/.bin/grpc_tools_node_protoc"
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"
OUT_DIR="./generated"

echo "Compiling protobuf definitions"

rm -rf ${OUT_DIR}
mkdir ${OUT_DIR}

${PROTOC} \
  --js_out=import_style=commonjs,binary:${OUT_DIR} \
  --grpc_out=${OUT_DIR} \
  --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
  -I ${OUT_DIR} \
  -I ./ \
 *.proto

${PROTOC} \
  --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
  --ts_out=${OUT_DIR} \
  -I ${OUT_DIR} \
  -I ./ \
 *.proto

 rm -rf ./server/src/generated
 rm -rf ./client/src/generated
 cp -R ${OUT_DIR} ./server/src/generated
 cp -R ${OUT_DIR} ./client/src/generated
 rm -rf ${OUT_DIR}