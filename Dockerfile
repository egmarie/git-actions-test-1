
# Use an official Node runtime as a parent image
# FROM node:17-alpine

# # Set the working directory to /app
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install dependencies
# RUN npm install --production

# # Copy the rest of the application code to the working directory
# COPY . .

# # Expose port 3000
# EXPOSE 3000

# Start the app
# CMD ["npm", "run", "build"]
#Stage 1
# FROM node:17-alpine as builder
# WORKDIR /app
# COPY package.json /app/package.json
# COPY package-lock.json /app/package-lock.json
# RUN npm ci
# COPY . /app




# RUN npm run build
# # CMD [ "npm", "start" ]
# # Stage 2 docker build -t imagename .
# FROM nginx:1.19.0
# # COPY --from=build /app/build /usr/share/nginx/html
# # COPY nginx.conf /etc/nginx/conf.d/default.conf
# # COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=build /app/build .
# COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# FROM node:17-alpine
# WORKDIR /app
# COPY . /app
# RUN npm install
# EXPOSE 3000
# CMD node index.js

FROM node:17-alpine
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD npm run dev

# NOTES
#npm run build
## DOCKER COMMANDS

# -d frees up your terminal
# -t is for tag
# -p is for port

# docker build -t egma34y/3d-portfolio:0.0.0.RELEASE .
# docker container ls
# docker image ls
# docker container run -d -p 3000:3000 egma34y/3d-portfolio:0.0.0.RELEASE
# docker container stop 820
# 