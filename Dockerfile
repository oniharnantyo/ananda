FROM node:16.17.1

# Add Maintainer Info
LABEL maintainer="Vidyasena Dev <oni.harnantyo97@gmail.com>"

ARG BUILD_USER
ARG BUILD_MACHINE
ARG BUILD_TOKEN


ENV build_token=$BUILD_TOKEN
ENV build_user=$BUILD_USER
ENV build_machine=$BUILD_MACHINE

WORKDIR /app/ananda

ADD . /app/ananda

RUN npm i -g npm@8.1.1

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npm run start"]