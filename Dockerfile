
FROM node:22-alpine

RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn global add @nestjs/cli

ENV PRISMA_CLIENT_ENGINE_TYPE binary
ENV PRISMA_CLI_BINARY_TARGETS linux-musl

RUN yarn prisma generate

EXPOSE 3000

CMD ["sh", "-c", "until pg_isready -h db -p 5432; do echo 'Waiting for PostgreSQL...'; sleep 2; done && yarn prisma migrate dev && yarn start:dev"]
