FROM node:16.13.1

COPY ./pet-suppolies/package-lock.json ./
COPY ./pet-suppolies/package.json ./
RUN npm install
RUN npm install react-router-dom@5

COPY . ./

WORKDIR "/pet-suppolies"

CMD ["npm", "start"]