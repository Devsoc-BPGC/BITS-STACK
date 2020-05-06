FROM node:alpine

WORKDIR /usr/src/waves2020/client/

COPY ./package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm","start"]