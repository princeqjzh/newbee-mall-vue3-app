FROM node:16.13.0

RUN mkdir -p /home/nodejs/app

WORKDIR /home/nodejs/app
COPY . .

RUN npm install

EXPOSE 8080
CMD ["npm","run", "serve"]