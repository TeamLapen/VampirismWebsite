FROM nginx:alpine

# Copy the contents of the root directory to the Nginx html directory
COPY root/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# The default command for the nginx:alpine image is to start Nginx, so no CMD is needed.
