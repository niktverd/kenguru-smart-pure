// Список пользователей
import type { NextPage } from 'next'
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';
import Link from 'next/link';
import { User, UsersProps } from '../types/User';
import { useEffect, useState } from 'react';

// type TickersProps = {
//     _id: string;
//     name: string;
//     currentPrice: number;
//     ticker: string;
//     exchange: string;
// };

// import { useParams } from 'react-router-dom';

// type Props = {
//     children: any;
// };
    
const UsersKenguru: NextPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(async () => {
        const usersFound = await fetch('/api/getUsers');
        const usersFoundJson = await usersFound.json();
        // console.log(usersFoundJson);
        setUsers(usersFoundJson);
    }, [])

    return (
        <WideLayoutKenguru>
            <>
                {users.map((user: User) => {
                    return (
                        <div key={user._id}>
                            <span>{user.name} - </span>
                            <span>
                                <Link href={`/user/${user._id}`}>Open</Link>
                            </span>
                        </div>
                    );
                })}
                ;
            </>
        </WideLayoutKenguru>
    );
};

export default UsersKenguru;

