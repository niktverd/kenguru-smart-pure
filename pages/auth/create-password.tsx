import { gql } from '@apollo/client';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const SEARCH_FOR_USER = gql`
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

const AuthGetUser: NextPage = () => {
    const router = useRouter();
    const {userName} = router.query;

    console.log(user);

    return (
        <div>auth/create-password</div>
    );
};

export default AuthGetUser;
