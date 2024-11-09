# Use nginx as the base image
FROM nginx:alpine

# Copy your custom Nginx configuration
COPY default.conf /etc/nginx/conf.d/

# Copy your static frontend files
COPY index.html /usr/share/nginx/html

# Expose port 80 for the frontend
EXPOSE 80

# Run Nginx in the foreground (default for nginx:alpine)
CMD ["nginx", "-g", "daemon off;"]
