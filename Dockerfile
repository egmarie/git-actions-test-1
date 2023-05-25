FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev", "--host"]
 
# aws ecr get-login-password --region us-east-1 | docker login -u ls-bluesky-ubu -p 686487091234.dkr.ecr.us-east-1.amazonaws.com/
#aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 686487091234.dkr.ecr.us-east-1.amazonaws.com/

#686487091234.dkr.ecr.us-east-1.amazonaws.com/3d_portfolio_ecr