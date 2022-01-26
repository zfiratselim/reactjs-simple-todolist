FROM node:15-alpine AS app-base
COPY . /app
WORKDIR /app
RUN npm ci
ENTRYPOINT npm start

