FROM node:18

RUN apt-get update && apt-get install libvips-dev -y

ARG NODE_ENV=production

ENV NODE_ENV=production

COPY ./package.json ./package-lock.json

#RUN npm config set network-timeout 600000 -g && npm install

ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app

COPY ./ .

RUN chown -R node:node /opt/app

USER node

#RUN ["npm","install"]

RUN ["npm", "run", "build"]

EXPOSE 1337

CMD ["npm", "run", "develop"]