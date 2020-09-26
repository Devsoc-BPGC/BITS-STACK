FROM node:alpine

WORKDIR /usr/src/bits_stack/client/

COPY ./package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm","start"]