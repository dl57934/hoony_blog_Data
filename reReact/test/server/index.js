import { GraphQLServer } from "graphql-yoga";
import Resolvers from "./javascript/Resolver";

const Server = new GraphQLServer({
  typeDefs: "./graphql/schema.graphql",
  resolvers: Resolvers
});

Server.start(() => console.log("ServerStart"));
