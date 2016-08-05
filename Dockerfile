FROM node:6.3.1
MAINTAINER manfm

RUN mkdir /app
WORKDIR /app

ADD package.json /app/

RUN npm install

ADD . /app

EXPOSE 3000

CMD [ "npm", "start" ]
