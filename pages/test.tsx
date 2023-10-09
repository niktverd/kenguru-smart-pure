// Доска для работы с тикерами
import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next'
// import googleFinance from 'google-finance'
import { WideLayoutKenguru } from '../src/components/layouts/WideLayoutKenguru';

const MyQuery = gql`
    query MyQuery {
        tickers {
            _id
            ticker
            name
            exchange
            lastPrice
        }
    }
`;

const KanbanKenguru: NextPage = () => {
    const { data, loading } = useQuery(MyQuery);
    if (loading) {
        return (
            <WideLayoutKenguru>
                <div>loading...</div>
            </WideLayoutKenguru>
        );
    }

    return (
        <WideLayoutKenguru>
            <pre>{JSON.stringify(data, null, 5)}</pre>
        </WideLayoutKenguru>
    );
};

export default KanbanKenguru;
