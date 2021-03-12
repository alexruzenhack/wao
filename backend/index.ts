import { PrismaClient } from '@prisma/client';
import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import userRouter from './src/user/user.router';

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
app.use('/api/v1/users', userRouter)

const PORT = 8080;
app.listen(PORT, ()  => {
    console.log(`⚡ [Server]: Server is running at https://localhost:${PORT}`);
});