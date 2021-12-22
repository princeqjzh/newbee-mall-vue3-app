FROM node:16.13.0

RUN mkdir -p /home/nodejs/app

WORKDIR /home/nodejs/app
COPY . .

RUN yarn install
RUN yarn build

EXPOSE 8080
CMD ["yarn","serve"]