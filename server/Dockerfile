FROM node:alpine

WORKDIR /home/waves2020/server/

COPY ./package*.json ./
RUN npm install

COPY ./ ./

CMD ["npm","start"]