// Панель для работы с конкретным тикером
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';

// type Props = {
//     children: any;
// };
    
const TickerKenguru: NextPage = (props) => {
    const router = useRouter();
    const {id} = router?.query;

    return (
        <WideLayoutKenguru>
            <div>Тикер Кенгкру {id}</div>
        </WideLayoutKenguru>
    );
};

export default TickerKenguru;

