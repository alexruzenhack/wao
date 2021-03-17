# Wrong Answers Only

Ask questions or answer it wrong.

> The purpose of this project is to show some knowldge I have gained with GraphQL + Express + Prisma. There is also an HTTP REST API in the backend to address the Question domain, a simple CRUD, from which I have built the GraphQL service.

# Dependencies

- Node.js 13+
- Yarn
- Docker

# Backend

## PostgreSQL set-up

Download postgres image

```jsx
docker pull postgres:latest
```

Setup postgres container with name `wao-postgres`

```jsx
docker run --name wao-postgres -p 5432:5432 -e POSTGRES_PASSWORD=itswrong -d postgres
```

Enter the container

```jsx
docker exec -it wao-postgres bash
```

Enter the database server

```jsx
psql -U postgres
```

Add UUID extension

```jsx
create extension if not exists "uuid-ossp";
```

Check installation

```jsx
select uuid_generate_v1();
```

## Install packages

```jsx
yarn install
```

## Prisma ORM

Generate the migration script after modeling

```jsx
yarn prisma migrate dev --name init --preview-feature
```

Build the Prisma client every time after change the scheme

```jsx
yarn prisma generate
```

## Run

```jsx
yarn start
```

# Frontend

## Install packages

```jsx
yarn install
```

## Run

```jsx
yarn start
```

# Reference

- Postgres Docker Hub
[https://hub.docker.com/_/postgres/](https://hub.docker.com/_/postgres/)
- Intro to the TSConfig Reference
[https://www.typescriptlang.org/tsconfig](https://www.typescriptlang.org/tsconfig)
- ts-node
[https://github.com/TypeStrong/ts-node](https://github.com/TypeStrong/ts-node)
- Prisma Quickstart
[https://www.prisma.io/docs/getting-started/quickstart-typescript](https://www.prisma.io/docs/getting-started/quickstart-typescript)
- Prisma schema API reference
[https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-scalar-types](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-scalar-types)
- Prisma REST Express sample
[https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express)
- How to Extend Express when using Typescript
[https://christiangiacomi.com/posts/extend-express-typescript-custom-types/](https://christiangiacomi.com/posts/extend-express-typescript-custom-types/)
- GraphQL Rules
[https://graphql-rules.com/](https://graphql-rules.com/)
- GraphQL Rules - 6. Mutation rules
[https://graphql-rules.com/rules/mutation](https://graphql-rules.com/rules/mutation)
- how to write a mutation schema which returns null?
[https://github.com/ardatan/graphql-tools/issues/277](https://github.com/ardatan/graphql-tools/issues/277)
- Solution with a custom scalar [how to write a mutation schema which returns null?]
[https://stackoverflow.com/a/61714123](https://stackoverflow.com/a/61714123)
- Can't import the named export 'Component' from non EcmaScript module (only default export is available)
[https://github.com/formatjs/formatjs/issues/1395](https://github.com/formatjs/formatjs/issues/1395)
- Can't import the named export 'diff' from non EcmaScript module (only default export is available)
[https://github.com/uber/nebula.gl/issues/285](https://github.com/uber/nebula.gl/issues/285)
- Wonka — Iterable and observable library
[https://wonka.kitten.sh/](https://wonka.kitten.sh/)

### Clientes

- REST API Client
[https://hoppscotch.io/?method=GET&url=http://localhost:8080&path=/api/v1/users/88c1a534-84b2-4c5c-a1f8-81844bfab895&rawParams={ "email": "alex.ruzenhack@gmail.com", "name": "Alex Ruzenhack"
}](https://hoppscotch.io/?method=GET&url=http://localhost:8080&path=/api/v1/users/88c1a534-84b2-4c5c-a1f8-81844bfab895&rawParams=%7B%0A%20%20%22email%22:%20%22alex.ruzenhack@gmail.com%22,%0A%20%20%22name%22:%20%22Alex%20Ruzenhack%22%0A%7D)
- GraphQL Client
[https://www.graphqlbin.com/v2/6RQ6TM](https://www.graphqlbin.com/v2/6RQ6TM)