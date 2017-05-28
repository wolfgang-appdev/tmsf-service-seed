FROM node:7.10
RUN mkdir -p /usr/src/app
RUN mkdir -p /var/log/app
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
