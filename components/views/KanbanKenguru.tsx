// Доска для работы с тикерами
import type { NextPage } from 'next'
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';

// type Props = {
//     children: any;
// };

const KanbanKenguru: NextPage = () => {
    return (
        <WideLayoutKenguru>
            <div>Канбан</div>
        </WideLayoutKenguru>
    );
};

export default KanbanKenguru;
