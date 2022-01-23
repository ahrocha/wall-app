FROM node:16-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install -g npm@8.3.2
RUN npm install
RUN npm install react-scripts@3.3.1 -g

CMD ["npm", "run", "watch"]
