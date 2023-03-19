#Stage 1
FROM node:17-alpine as builder
WORKDIR /app
COPY requirements.txt .
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci
COPY . /app


# CMD [ "npm", "start" ]
RUN npm run build
# Stage 2 docker build -t imagename .
FROM nginx:1.19.0
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]