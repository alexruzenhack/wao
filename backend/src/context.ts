import { PrismaClient } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';

const prisma = new PrismaClient();
const pubsub = new PubSub();

export interface Context {
    prisma: PrismaClient
    pubsub: PubSub
}

export function createContext(): Context {
    return {prisma, pubsub};
}
