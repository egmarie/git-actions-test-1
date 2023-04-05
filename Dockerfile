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

FROM node:17-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev", "--host"]


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
# volumes, environment variables, section just for ports
# complex resources, netowrk, database with docker compose
# nginx