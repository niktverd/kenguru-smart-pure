import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const SEARCH_FOR_USER = gql`
    query MyQuery($name: String) {
        user(name: $name) {
            name
            pin
        }
    }
`;

const AuthGetUser: NextPage = () => {
    const router = useRouter();
    const {user} = router.query;
    const {data, loading} = useQuery(SEARCH_FOR_USER, {
        variables: {
            name: user,
        },
    });

    if (loading) {
        return <div>Loading ...</div>
    }

    console.log(user, data);

    if (!data.user) {
        router.push('/auth/login');
        return null;
    }

    if (data.user.pin.length < 1) {
        router.push('/auth/create-password?userName=' + user);
        return null;
    } else {
        router.push('/auth/login?userName=' + user);
    }

    
    return null;

};

export default AuthGetUser;
