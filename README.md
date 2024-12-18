# uhuu-delivery-backend

API de backend para gerenciamento de clientes e geolocalização de entregas, utilizando NestJS e PostgreSQL. A aplicação
fornece uma API para cadastrar clientes, buscar informações de geolocalização e listar clientes com paginação.

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Variáveis de Ambiente](#variaveis-do-ambiente)
- [Rodando Projeto com o Docker](#rodando-projeto-com-o-docker)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instalação e Execução](#instalação-e-execução)



## Funcionalidades

- Cadastro de clientes com dados pessoais e geolocalização.
- Listagem de clientes com paginação.
- Obtenção de latitude e longitude de endereços utilizando a API Nominatim.
- Documentação interativa da API com Swagger.

## Tecnologias

- **Node.js** e **NestJS**: Framework de desenvolvimento.
- **PostgreSQL**: Banco de dados.
- **Prisma ORM**: ORM para interagir com o banco de dados.
- **Axios**: Biblioteca para requisições HTTP.
- **Swagger**: Documentação interativa.
- **Docker**: Containerização para PostgreSQL e backend.


## Rodando Projeto com o Docker
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
DATABASE_URL="postgresql://postgres:postgres@db:5432/my_delivery_db"

- Rodando projeto com o docker:
  - Primeiro rode o comando: docker-compose up -d db
  - Depois rode o comando: docker-compose up -d app
  - Pronto, backend já está funcionado.

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:


Sem o Docker:
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/my_delivery_db"

## Configuração do Ambiente

Antes de iniciar a aplicação, certifique-se de ter o [Node.js](https://nodejs.org/) e
o [Docker](https://www.docker.com/) instalados.

## Instalação e Execução

- Clonar repositório: git clone https://github.com/seu-usuario/uhuu-delivery-backend.git
 
- Caso não queira rodar com o docker:
  - Inicie o Prisma e migre o banco de dados:  prisma migrate dev --name init
  - Iniciar o Servidor em desenvolvimento: yarn start:dev # ou npm run start:dev
  - Verificar a Documentação Swagger: http://localhost:3000/api-docs




