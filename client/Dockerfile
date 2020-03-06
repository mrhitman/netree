FROM node:alpine

WORKDIR /opt
COPY src src
COPY yarn.lock yarn.lock
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY data.txt data.txt

RUN yarn install
RUN yarn build --project tsconfig.json

CMD yarn start