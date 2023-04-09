ARG NODE_VERSION=14.18.1-alpine3.14
FROM node:${NODE_VERSION} AS build

ARG VITE_BASE_URL
ARG VITE_CLIENT_ID
ARG VITE_SECRET
ARG VITE_VERSION
ARG GENERATE_SOURCEMAP

ENV VITE_BASE_URL=${VITE_BASE_URL}
ENV VITE_CLIENT_ID=${VITE_CLIENT_ID}
ENV VITE_SECRET=${VITE_SECRET}
ENV VITE_VERSION=${VITE_VERSION}
ENV GENERATE_SOURCEMAP=${GENERATE_SOURCEMAP}
ENV PATH /usr/src/app/node_modules/.bin:$PATH

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn
COPY . .
# RUN npm rebuild node-sass
RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build/ /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3001
CMD [ "nginx", "-g", "daemon off;" ]
