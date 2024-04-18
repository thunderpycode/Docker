# Use a lightweight base image
FROM alpine:latest

# Copy the server script into the container
COPY server.sh /server.sh

# Make the server script executable
RUN chmod +x /server.sh

# Define the server for the container
ENTRYPOINT ["/server.sh"]
