FROM node:13-alpine

COPY ./ ./
RUN npm install
RUN npm run build

CMD [ "npm", "run", "start:ssr" ]