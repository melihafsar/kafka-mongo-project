FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY src/package.json /app/package.json
COPY src/package-lock.json /app/package-lock.json

# Install dependencies
RUN npm ci

# Copy the source code to the container
COPY src/consumer.js /app/consumer.js

# Set the command to run the consumer.js file
CMD [ "node", "consumer.js" ]
