// компонент с новостями сообщества
import type { NextPage } from 'next'
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';

// type Props = {
//     children: any;
// };

const MainKenguru: NextPage = () => {
    return (
        <WideLayoutKenguru>
            <div>Новости сообщества</div>
        </WideLayoutKenguru>
    );
};

export default MainKenguru;
