FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN apk update
RUN apk add alpine-sdk
RUN apk add python
RUN npm install 
COPY . .
EXPOSE 3000
CMD npm start