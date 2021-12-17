FROM node:16
WORKDIR /usr/src/app
COPY ./ package*.json 
ADD package.json /usr/src/app/package.json
RUN npm i -g nodemon
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]