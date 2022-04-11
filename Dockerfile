FROM node:16.14.2
WORKDIR /usr/src/app
COPY package*.json ./
EXPOSE 5000
RUN npm install
COPY . .
CMD npm start