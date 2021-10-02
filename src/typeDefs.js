import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    cats: [Cat!]!
    cats2: [Cat!]!
  }
  type Cat {
    id: ID!
    name: String!
    test: String
    alias: String
  }
  type Mutation {
    createCat(name: String!, test: String, alias: String): Cat!
    deleteMessage(id: String!): String
    updateMessage(id: String!, name: String): Cat!
    deleteALL(id: String): String
  }
`;
