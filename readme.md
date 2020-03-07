## simple gPRPC client-server

<em> This project used for training purposes and not
recommeneded to use in real life </em>

```sh
    yarn install                # to install dependencies
    yarn build                  # to generate proto models
```

### Server commands

```sh
    cd server
    cp .env.example .env # create config from default boilerplate
    yarn test            # to run tests
    yarn build           # transpile ts to js
    yarn start           # to run server
    yarn dev             # to run server in dev mode
```

### Client commands

```sh
    cd client
    yarn cli -all                           # get all nodes
    yarn cli -view xxxx-xxxxx-xxxx-xxxxx    # view some node
    yarn cli -delete xxxx-xxxxx-xxxx-xxxxx  # view some node
    yarn cli -add name parent_id            # add node
    yarn cli -update name parent_id         # update node
    yarn cli -subscribe                     # subscribe for updates
```
