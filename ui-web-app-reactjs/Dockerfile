FROM node:14
WORKDIR /app
COPY . .
RUN npm install cors
RUN npm install
RUN npm run build 
EXPOSE 8080
CMD ["node", "server.js"]

