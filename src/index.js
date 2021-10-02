import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "../src/resolver";
import { typeDefs } from "../src/typeDefs";

const urlMongo =
  "mongodb+srv://darwin:gand27ef@cluster0.i1rve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  await server.applyMiddleware({ app });

  await mongoose.connect(urlMongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
