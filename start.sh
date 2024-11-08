#!/bin/sh
yarn run prisma migrate restart
yarn run prisma migrate dev
yarn run start:dev
