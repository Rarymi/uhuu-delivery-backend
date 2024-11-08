#!/bin/sh
yarn run prisma migrate dev
yarn run prisma migrate restart
yarn run start:dev
