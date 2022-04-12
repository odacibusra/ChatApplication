FROM node:16.14.2 
WORKDIR /usr/src/app/frontend
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]