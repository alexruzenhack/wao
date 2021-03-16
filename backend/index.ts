import ws from 'ws';
import { PrismaClient } from '@prisma/client';
import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import userRouter from './src/user/user.router';
import { graphqlHTTP } from 'express-graphql';
import { createContext } from './src/context';
import { schema } from './src/graphSchema';
import { useServer } from 'graphql-ws/lib/use/ws';
import { execute, subscribe } from 'graphql';

declare global {
  namespace Express {
    interface Request {
      context: PrismaClient 
    }
  }
}

const prisma = new PrismaClient();
const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.context = prisma;
    next();
})
app.use('/api/v1/users', userRouter);
app.use('/graphql', graphqlHTTP({
  schema, context: createContext()
}));

const PORT = 8080;
const server = app.listen(PORT, ()  => {
  // create and use the websocket server
  const wsServer = new ws.Server({
    server,
    path: '/graphql',
  });

  useServer(
    {
      schema,
      context: createContext(),
      execute,
      subscribe,
    },
    wsServer,
  );

  console.log(`⚡ [Server]: Server is running at https://localhost:${PORT}`);
});