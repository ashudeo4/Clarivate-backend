<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Deployment

It is deployed - 

Pasting CURL

# Health Check

`
curl --location 'http://144.24.143.19:3000/healthcheck'
`

# Sign Up

`
curl --location 'http://144.24.143.19:3000/auth/signup' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgwY2UxMjQ5Y2QyMzgwN2U2OTA0MzAwIn0sImlhdCI6MTc0NTcwMzk4MiwiZXhwIjoxNzQ1NzM5OTgyfQ.hafp4ptcEx5OUHqCT1WURfJXkOph0lVzB6RrjGk-AFk' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Ashutosh",
    "email": "ashudeo4@gmail.com",
    "password": "12345678",
    "organization": "TH"
}'
`


# Sign In

`
curl --location 'http://144.24.143.19:3000/auth/signin' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "ashudeo4@gmail.com",
    "password": "12345678"
}'
`

# Dashboard

`
curl --location 'http://144.24.143.19:3000/users/dashboard' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYXNodWRlbzRAZ21haWwuY29tIiwibmFtZSI6IkFzaHV0b3NoIiwib3JnYW5pemF0aW9uIjoiVEgiLCJpYXQiOjE3NDgxMTE0NjYsImV4cCI6MTc0ODExNTA2Nn0.SykBZVqG84xSPkWHxrIS96C9_3BUQN0yJhrGsXUqvds'
`
