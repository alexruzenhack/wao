import { makeExecutableSchema } from '@graphql-tools/schema';
import { Context } from './context';
import  gql from 'graphql-tag';

const event = {
  NEW_QUESTION: "NEW_QUESTION"
};

const typeDefs = gql`
type User {
  id: String
  email: String!
  name: String
}

type Question {
  id: String
  createdAt: String
  updatedAt: String
  content: String!
  author: User
  authorId: String
}

input UserWhereUniqueInput {
  id: String
}

input QuestionWhereUniqueInput {
  id: String
}

type Query {
  user(where: UserWhereUniqueInput): User
  allQuestions: [Question]
  findQuestion(where: QuestionWhereUniqueInput): Question
}

input QuestionInput {
  content: String!
  authorId: String!
}

input QuestionUpdateInput {
  content: String!
}

type Mutation {
    questioning(data: QuestionInput): Question
    updateQuestion(id: String, data: QuestionUpdateInput): Question
    deleteQuestion(id: String): Boolean
}

type Subscription {
  newQuestion: Question
}

`;

const resolvers = {
  Query: {
    user: (parent, args, ctx: Context) => {
      return ctx.prisma.user.findUnique({
        where: { id: args.where.id },
      });
    },
    allQuestions: (parent, args, ctx: Context) => {
        return ctx.prisma.question.findMany();
    },
    findQuestion: (parent, args, ctx: Context) => {
        return ctx.prisma.question.findUnique({...args});
    },
  },
  Mutation: {
      questioning: (parent, args, ctx: Context) => {
        const newQuestion = ctx.prisma.question.create(args);
        ctx.pubsub.publish(event.NEW_QUESTION, newQuestion);
        return newQuestion;
      },
      updateQuestion: (parent, args, ctx: Context) => {
        return ctx.prisma.question.update({
            where: {id: args.id},
            data: args.data
        });
      },
      deleteQuestion: (parent, args, ctx: Context) => {
        try {
           ctx.prisma.question.delete({where: {id: args.id}}); 
           return true;
        } catch (error) {
            return false;
        } 
      },
  },
  Subscription: {
    newQuestion: {
      subscribe: (parent, args, ctx: Context) => {
        console.log('Testing subscription');
        return ctx.pubsub.asyncIterator(event.NEW_QUESTION);
      },
      resolve: payload => payload
    }
  },
  Question: {
      author: (parent, args, ctx: Context) => {
          return ctx.prisma.question.findUnique({where: {id: parent.id}}).author();
      }, 
  },
}

export const roots = {
  query: resolvers.Query,
  mutation: resolvers.Mutation,
  subscription: resolvers.Subscription
}

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})