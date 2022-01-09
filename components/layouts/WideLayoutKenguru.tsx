// Доска для работы с тикерами
// import React from 'react';
// import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import Link from 'next/link'
type Props = {
    children: React.ReactElement;
};

export const WideLayoutKenguru = (props: Props): React.ReactElement => {
    const { children } = props;

    return (
        <>
            <Grid container>
                <Grid item xs={2}>
                    <div>
                        <Link href="/">Home</Link>
                    </div>
                    <div>
                        <Link href="/kanban">Kanban</Link>
                    </div>
                    <div>
                        <Link href="/ticker">Ticker</Link>
                    </div>
                    <div>
                        <Link href="/ticker/123">Ticker id</Link>
                    </div>
                    <div>
                        <Link href="/user">Users</Link>
                    </div>
                    <div>
                        <Link href="/user/789">User 789</Link>
                    </div>
                    {/* <div>
                        <Link to="/user/123">User - 123</Link>
                    </div> */}
                </Grid>
                <Grid item xs={10}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};
