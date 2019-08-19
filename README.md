# event_manager_app
Phone app for Event Manager web application using react native


GraphQL Docker setup

Make sure docker is installed and docker cmd works withn local machine 

1. pull docker image  using cmd: docker pull zeke13210/tocserver
2. Within terminal run cmd docker container run -p 4000:4000 -it zeke13210/tocserver --this will get you terminal access into docker env at localhost:4000
3. navigate to home/development/graphql-server/
4. run cmd: node index.js --this will start node server running graphql playground to test data pull at localhost:4000
