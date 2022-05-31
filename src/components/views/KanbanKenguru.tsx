// Доска для работы с тикерами
import type { NextPage } from 'next'
import googleFinance from 'google-finance'
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';

// type Props = {
//     children: any;
// };

const KanbanKenguru: NextPage = () => {
    googleFinance.companyNews({
        symbol: 'NASDAQ:AAPL'
      }, function (err, news) {
        console.log(news);
      });
    return (
        <WideLayoutKenguru>
            <div>Канбан</div>
        </WideLayoutKenguru>
    );
};

export default KanbanKenguru;
