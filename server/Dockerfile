FROM node:alpine

WORKDIR /usr/src/waves2020/server/

COPY ./package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 5000

CMD ["npm","start"]