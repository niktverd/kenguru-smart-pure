// компонент с новостями сообщества
import type { NextPage } from 'next'
import { useQuery, gql } from '@apollo/client';
import { initializeApollo } from 'src/graphql/apollo';
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';
import { AddTickerForm } from '../forms/Ticker';


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

const MainKenguru: NextPage = () => {
    const { data, loading } = useQuery(MyQuery);

    if (loading) return <span>loading...</span>;
    return (
        <WideLayoutKenguru>
            <>
                <div>Новости сообщества</div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
                {false && <AddTickerForm />}
            </>

        </WideLayoutKenguru>
    );
};

export default MainKenguru;


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
