FROM node:16.13.1

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-router-dom@5

COPY . ./

CMD ["npm", "start"]