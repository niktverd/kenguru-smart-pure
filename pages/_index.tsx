import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/graphql/apollo";

const MyQuery = gql`
  query MyQuery {
    name
    users {
      name
    }
    tickers {
      ticker
      exchange
      lastPrice
    }
  }
`;

export default function Home() {
  const { data, loading } = useQuery(MyQuery);

  if (loading) return <span>loading...</span>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MyQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}