import { ApolloServer } from 'apollo-server-micro';
import { schema } from 'src/schema';
import Cors from 'micro-cors';
import { PageConfig } from "next";
// import { createContext } from "graphql/context";

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS'],
});

const server = new ApolloServer({
    schema,
    context(ctx) {
        return ctx;
    },
});

export const config: PageConfig = {
    api: {
        bodyParser: false,
    }
};

const startServer = server.start();


export default cors(async (req, res) => {
    if (req.method === "OPTIONS") {
      res.end();
      return false;
    }
  
    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req, res);
  });
