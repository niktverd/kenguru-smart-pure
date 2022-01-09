// Панель пользователя
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';
import { User, UsersProps } from '../types/User';

// type Props = {
//     users: User[];
// };

// export const UserKenguru = (props: UsersProps): React.ReactElement => {
//     const params = useParams() as any;
//     const { id } = params;

//     const { users } = props;

//     const [user, setUser]: [User | null, Dispatch<SetStateAction<User>> | Dispatch<SetStateAction<null>>] =
//         useState(null);

//     useEffect(() => {
//         const foundUser = users.find((u: User | never) => u._id === id);

//         setUser(foundUser);
//     }, [id, users]);

//     if (!user)
//         return (
//             <WideLayoutKenguru>
//                 <div>User not found</div>
//             </WideLayoutKenguru>
//         );

//     return (
//         <WideLayoutKenguru>
//             <div>
//                 Пользователь {user._id} {user.name}
//             </div>
//         </WideLayoutKenguru>
//     );
// };



// type Props = {
//     children: any;
// };
    
const UserKenguru: NextPage = (props) => {
    const router = useRouter();
    const {id} = router?.query;

    const [user, setUser]: [User | null, Dispatch<SetStateAction<User>> | Dispatch<SetStateAction<null>>] =
    useState(null);

    useEffect(async () => {
        const foundUser = await fetch('/api/getUserById');
        const foundUserJson = await foundUser.json();

        setUser(foundUserJson);
    }, [id]);
    if(!user) return null;
    return (
        <WideLayoutKenguru>
            <div>Пользователь {user._id} {user.name}</div>
        </WideLayoutKenguru>
    );
};

export default UserKenguru;

