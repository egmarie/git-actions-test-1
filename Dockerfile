

FROM node:17-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev", "--host"]

