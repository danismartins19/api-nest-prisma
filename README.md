<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Esse é um projeto desenvolvido com o framework [Nest.JS](https://github.com/nestjs/nest), Typescript, SQLite, e o famoso Prisma.

## Contexto

Essa aplicação consiste em manter alunos, professores, e salas. Podendo adicionar alunos à salas criadas pelos professores cadastrados na aplicação.

## Conceitos 

Diante do contexto da aplicação, eu pude aprender como o Nest trabalha com controllers e rotas, e também como o Prisma agiliza a persistência dos nossos dados e dos relacionamentos das tabelas.
## Instalação

<strong>Obs: O banco de dados já estará pronto para o uso na aplicação!</strong>

```bash
$ npm install
```

## Rodando a aplicação

```bash
# desenvolvimento
$ npm run start

# watch mode
$ npm run start:dev

# produção
$ npm run start:prod
```

## URL Base

Por padrão, o servidor se iniciará na porta 3000.
Portanto, a URL local seria: http://localhost:3000/

## Endpoints 

Você encontrará um arquivo chamado `Insomnia_Routes.json` na pasta base do projeto para importar no seu Insomnia. Nele irá conter todas as rotas, e os dados necessário de cada endpoint.


## Alunos
```bash
  # Cadastrar Aluno
  $POST - BASE_URL/alunos
  { "matricula" : number, "nome":string, "email":string, "data_nasc" : string }

  # Atualizar Aluno
  $PUT - BASE_URL/alunos/{matricula}
  { "nome":string, "email":string, "data_nasc" : string }

  # Consultar um Aluno
  $GET - BASE_URL/alunos/{matricula}

  # Deletar um Aluno
  $DELETE - BASE_URL/alunos/{matricula}

  # 

```