MongoDB-Kafka-Node.js with Docker Compose

This is a node.js application that uses Kafka and MongoDB to process data.

Creating and Running the Containers

Follow the steps below to create and run the containers:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the repository.
3. Run the following command to build the containers:
   ```
   docker-compose build
   ```
4. Run the following command to start the containers:
   ```
   docker-compose up
   ```
This command will start the Kafka and MongoDB containers and run the consumer and producer containers.

The producer container will generate data and send it to the Kafka topic. The consumer container will consume the data from the Kafka topic and store it in the MongoDB database.

To view the data in the MongoDB database, you can connect to the mongo1 container and run the mongo command-line tool.

```
docker exec -it mongo1 mongo
```

This will open the MongoDB shell and provide an environment where you can run commands to view the data.

---------------------

### Dockerhub image links

- [producer](https://hub.docker.com/repository/docker/melihafsar/mongo-kafka-project-producer)
- [consumer](https://hub.docker.com/repository/docker/melihafsar/mongo-kafka-project-consumer)