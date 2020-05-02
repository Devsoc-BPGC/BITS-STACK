FROM node:alpine

WORKDIR /home/waves2020

COPY ./package.json ./
RUN npm install

RUN mkdir client
COPY ./client/package.json ./client/
RUN cd client
RUN npm install
RUN cd ..

COPY ./ ./
COPY ./client/ ./client/

CMD ["npm","run","dev"]