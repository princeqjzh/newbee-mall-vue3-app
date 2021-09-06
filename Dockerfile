FROM node:latest

RUN mkdir -p /home/nodejs/app

WORKDIR /home/nodejs/app
COPY . .

RUN yarn install
RUN yarn build

EXPOSE 8080
CMD ["yarn","serve"]