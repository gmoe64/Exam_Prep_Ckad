# Use a slim Node.js base image for smaller image size
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY server.js .

# Expose the port your Node.js application listens on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "server.js"]
