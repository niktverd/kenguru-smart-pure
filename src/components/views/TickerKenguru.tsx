// Панель для работы с конкретным тикером
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { json } from 'stream/consumers';
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';

import getTickers from '../../../data-templates/tickers';
import { Grid } from '@mui/material';
// type Props = {
//     children: any;
// };
    
const TickerKenguru: NextPage = (props) => {
    const router = useRouter();
    const {id} = router?.query;
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const tickers = getTickers();
    const ticker = tickers.find(t=> t._id===id);
    const handleInputComment = (e) => {
        setComment(e.currentTarget.value)
    }
    const handleSendComment = (e) => {
        if(e.key == 'Enter' && comment){
            setComments([...comments, {
                text: comment,
                createdAt: new Date(),
                public: false,
                tickerId: id,
            }]);
            setComment('');
        }
    }
    return (
        <WideLayoutKenguru>
            <Grid container>
                <Grid item xs={5}>
                    <div>Тикер Кенгкру {id}</div>
                </Grid>
                <Grid item xs={4}>
                    <div>{JSON.stringify(ticker)}</div>
                </Grid>
                <Grid item xs={3}>
                    <div>
                        <input type="text" value={comment} onKeyUp={handleSendComment} onChange={handleInputComment} />
                    </div>
                    <div>
                        {comments.map((com, i) => {
                            return <div key={com+i}>
                                {JSON.stringify(com)}
                            </div>
                        })}
                    </div>
                </Grid>
            </Grid>
        </WideLayoutKenguru>
    );
};

export default TickerKenguru;

