// Список тикеров
import type { NextPage } from 'next'
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';

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
    
const TickersKenguru: NextPage = () => {

    return (
        <WideLayoutKenguru>
            <div>Тикеры Кенгкру</div>
        </WideLayoutKenguru>
    );
};

export default TickersKenguru;

