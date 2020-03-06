FROM node:alpine

WORKDIR /opt
COPY src src
COPY package.json package.json
COPY tsconfig.json tsconfig.json

RUN yarn install
RUN yarn build --project tsconfig.json

CMD yarn start