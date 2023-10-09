// Список тикеров
import type { NextPage } from 'next'
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { initializeApollo } from 'src/graphql/apollo';
// import { AddTickerForm } from '../forms/Ticker';

const MyQuery = gql`
    query MyQuery {
        # name
        # users {
        #     name
        # }
        tickers {
            _id
            ticker
            name
            exchange
            lastPrice
        }
    }
`;

// const rows: GridRowsProp = [
//     { id: 1, col1: 'Hello', col2: 'World' },
//     { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//     { id: 3, col1: 'MUI', col2: 'is Amazing' },
// ];
  
const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 50, sortable: true },
    { field: 'name', headerName: 'Name', width: 150, sortable: true },
    { field: 'ticker', headerName: 'Ticker', width: 150, sortable: true },
    { field: 'exchange', headerName: 'Exchage Name', width: 150, sortable: true },
    { field: 'lastPrice', headerName: 'Last. Price', width: 150, sortable: true },
];

const TickersKenguru: NextPage = () => {
    const { data, loading } = useQuery(MyQuery);
    // const {history} = useHistory;

    if (loading) return <span>loading...</span>;
    // console.log(data);
    // const [tickers, setTickers] = useState([]);

    // useEffect(async () => {
    //     const foundTickers = await fetch('/api/getTickers');

    //     const foundTickersJson = await foundTickers.json();

    //     foundTickersJson.forEach((ticker) => {
    //         ticker.id = ticker._id;
    //     })

    //     setTickers(foundTickersJson)
    // }, [])
    if (!data) {
        return null;
    }

    const { tickers } = data;
    
    const ticks = tickers.map((ticker: any )=> ({
        ...ticker,
        id: ticker._id
    }));

    const onRowClick = (data: any) => {
        console.log(data.id)
    }
    const onCellClick = (data: any) => {
        if (data.field === '_id'){
            alert(data.id);
        }
    }

    return (
        <WideLayoutKenguru>
            <>
                <div>Тикеры Кенгкру</div>
                {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
                <div style={{ height: 600, width: '100%' }}> 
                    <DataGrid rows={ticks} columns={columns} onRowClick={onRowClick} onCellClick={onCellClick}/>
                </div>
                {/* <AddTickerForm /> */}
            </>
        </WideLayoutKenguru>
    );
};

export default TickersKenguru;


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
