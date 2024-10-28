# uhuu-delivery-backend

API de backend para gerenciamento de clientes e geolocalização de entregas, utilizando NestJS e PostgreSQL. A aplicação
fornece uma API para cadastrar clientes, buscar informações de geolocalização e listar clientes com paginação.

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Instalação e Execução](#instalação-e-execução)
- [Configuração do Ambiente](#configuração-do-ambiente)

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

## Instalação e Execução

- Clonar repositório: git clone https://github.com/seu-usuario/uhuu-delivery-backend.git
- Subir o Banco de Dados com Docker: docker-compose up -d
- Inicie o Prisma e migre o banco de dados:  prisma migrate dev --name init
- Iniciar o Servidor em desenvolvimento: yarn start:dev # ou npm run start:dev
- Verificar a Documentação Swagger: http://localhost:3000/api-docs

## Configuração do Ambiente

Antes de iniciar a aplicação, certifique-se de ter o [Node.js](https://nodejs.org/) e
o [Docker](https://www.docker.com/) instalados.

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DATABASE_HOST=localhost          # Endereço do PostgreSQL
DATABASE_PORT=5432               # Porta do PostgreSQL
DATABASE_USER=postgres           # Usuário do banco de dados
DATABASE_PASSWORD=postgres       # Senha do banco de dados
DATABASE_NAME=my_delivery_db     # Nome do banco de dados