import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { KanbanKenguru } from './views/KanbanKenguru';
import { MainKenguru } from './views/MainKenguru';
import { TickerKenguru } from './views/TickerKenguru';
import { TickersKenguru } from './views/TickersKenguru';
import { UserKenguru } from './views/UserKenguru';
import { UsersKenguru } from './views/UsersKenguru';

const users = [
    { _id: '1', name: 'nikolay' },
    { _id: '2', name: 'Anastasia' },
    { _id: '3', name: 'Serg' },
];

const tickers = [
    { _id: '1', name: 'South Gobi Resources LTD', ticker: 'SGH', exchange: 'ASX', currentPrice: 1.2 },
    { _id: '1', name: 'Brainchip LTD', ticker: 'BRN', exchange: 'ASX', currentPrice: 2.2 },
];

const KenguruApp = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <Route path="/" exact>
                <MainKenguru />
            </Route>
            <Route path="/kanban" exact>
                <KanbanKenguru />
            </Route>
            <Route path="/ticker/:id" exact>
                <TickerKenguru tickers={tickers} />
            </Route>
            <Route path="/tickers" exact>
                <TickersKenguru tickers={tickers} />
            </Route>
            <Route path="/user/:id" exact>
                <UserKenguru users={users} />
            </Route>
            <Route path="/users" exact>
                <UsersKenguru users={users} />
            </Route>
        </BrowserRouter>
    );
};

export default KenguruApp;
