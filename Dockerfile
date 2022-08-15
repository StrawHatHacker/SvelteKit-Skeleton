FROM node:16 as build
WORKDIR /app
EXPOSE 3000
COPY . ./
RUN npm install
RUN npm run build
CMD ["node", "index.js"]