FROM node:12.3.1-alpine

WORKDIR /app
COPY server .
COPY client/build ./dist/build

ENTRYPOINT ["node", "dist/index.js"]

EXPOSE 5000
