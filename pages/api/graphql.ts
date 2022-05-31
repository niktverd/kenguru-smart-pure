import { ApolloServer } from "apollo-server-micro";
import { schema } from "src/graphql/schema";
// import { resolvers } from "src/graphql/resolvers";
import { dbConnect } from "src/middlewares/db";

dbConnect();

const server = new ApolloServer({ schema });
const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;