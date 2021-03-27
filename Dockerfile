FROM library/node:12-alpine as builder

RUN mkdir /app 

COPY package.json /app

WORKDIR /app
RUN npm install

COPY . /app
RUN npm run build

# ========================================================================

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
