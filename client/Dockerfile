FROM node:alpine

WORKDIR /home/waves2020/client/

COPY ./package*.json ./
RUN npm install

COPY ./ ./

CMD ["npm","start"]