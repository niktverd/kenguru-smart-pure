import { Button, Grid, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { Dispatch, ReactElement, ReactEventHandler, SetStateAction, useEffect, useState } from 'react';

import formStyles from '../Ticker.module.css';

type Props = {
    initialValues: {
        exchange: string;
        ticker: string;
        name: string; 
    };
    manual: boolean;
};

type State = {
    exchange: string;
    ticker: string;
    name: string;
    manual: boolean;
    savePermited?: boolean;
}

export const FormFields = (props: Props) : ReactElement<Props> => {
    console.log(props);
    const [state, setState] = useState<State>({
        exchange: '',
        ticker: '',
        name: '',
        manual: false,
        savePermited: false
    });

    const handleChangeExchange = (event: unknown, newAlignment: string) => {
        setState({
            ...state,
            exchange: newAlignment,
        });
    };

    const handleFieldChange = (fieldName: string) => (event: ReactEventHandler<HTMLInputElement>) => {
        setState({
            ...state,
            [fieldName]: event.currentTarget.value,
        })
    }

    useEffect(()=>{
        if (state.exchange && state.ticker && state.name) {
            setState({
                ...state,
                savePermited: true,
            });
        } else {
            setState({
                ...state,
                savePermited: false,
            });
        }
    }, [state.exchange, state.ticker, state.name]);
    
    useEffect(()=>{
        console.log('UseEffect')
        const {exchange, ticker, name} = props.initialValues;
        setState({
            exchange,
            ticker,
            name,
            savePermited: (exchange && ticker && name) ? true: false
        });
    }, [props.initialValues.exchange, props.initialValues.ticker, props.initialValues.name, props.initialValues])

    return (
        <Grid container>
            <Grid item className={formStyles.formRow} xs={12}>
                <ToggleButtonGroup
                    color="primary"
                    value={state.exchange}
                    exclusive
                    onChange={handleChangeExchange}
                    style={{flexWrap: 'wrap'}}
                    disabled={props.manual==='auto'}
                >
                    <ToggleButton value="ASX">ASX</ToggleButton>
                    <ToggleButton value="TSE">TSE</ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            <Grid item className={formStyles.formRow} xs={12}>
                <TextField
                    label="Тикер (например, BRN)"
                    value={state.ticker}
                    fullWidth
                    onChange={handleFieldChange('ticker')}
                    disabled={props.manual==='auto'}
                />
            </Grid>
            <Grid item className={formStyles.formRow} xs={12}>
                <TextField
                    label="Наименование"
                    value={state.name}
                    disabled={props.manual==='auto'}
                    fullWidth
                    onChange={handleFieldChange('name')}
                />
            </Grid>
            <Grid item className={formStyles.formRow} xs={12}>
                <Button fullWidth color='primary' disabled={!state.savePermited} variant='contained'>
                    Добавить
                </Button>
            </Grid>
        </Grid>
    );
}
