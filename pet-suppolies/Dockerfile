FROM node:16.13.1

WORKDIR /pet-suppolies

ENV PATH /pet-suppolies/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-router-dom@5

COPY . ./

CMD ["npm", "start"]