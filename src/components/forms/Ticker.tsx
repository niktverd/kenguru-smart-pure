import { Button, Grid, Input, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { ChangeEventHandler, ReactEventHandler, useState } from 'react';

import styles from './Ticker.module.css'
import { FormFields } from './form-fields/form-fields';

export const AddTickerForm = () => {
    const [manual, setManual] = useState('auto');
    const [exchange, setExchange] = useState('AX');
    const [tickerSearch, setTickerSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [formInitVal, setFormInitVal] = useState({});


    const handleChangeMode = (event: unknown, newAlignment: string) => {
        setManual(newAlignment);
    };

    const handleChangeTickerSearch = (event: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>) => {
        setTickerSearch(event?.currentTarget.value);
    };

    const handleChangeExchange = (event: unknown, newAlignment: string) => {
        setExchange(newAlignment);
    };
    console.log(searchResult);
    return <div className={styles.fullScreen}>
        <Grid container>
            <Grid item xs={manual=='auto' ? 8 : 4} className={styles.formContainer}>
                <Grid container>
                    <Grid item xs={12}>
                        <h1>Добавить тикер</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <ToggleButtonGroup
                            color="primary"
                            value={manual}
                            exclusive
                            onChange={handleChangeMode}
                        >
                            <ToggleButton value="auto">Найти в справочнике</ToggleButton>
                            <ToggleButton value="manual">Добавить руками</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <hr />
                    </Grid>
                    {manual==='auto' && (
                        <Grid item xs={6} className={styles.half}>
                            <Grid container>
                                <Grid item className={styles.formRow} xs={12}>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={exchange}
                                        exclusive
                                        onChange={handleChangeExchange}
                                        style={{flexWrap: 'wrap'}}
                                    >
                                        <ToggleButton value="NONE">NONE</ToggleButton>
                                        <ToggleButton value="AX">ASX</ToggleButton>
                                        <ToggleButton value="TSE">TSE</ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>
                                <Grid item className={styles.formRow} xs={10}>
                                    <TextField
                                        label="Тикер (например, BRN)"
                                        value={tickerSearch}
                                        fullWidth
                                        onChange={handleChangeTickerSearch}
                                    />
                                </Grid>
                                <Grid item className={styles.formRow} xs={2}>
                                    <Button style={{height: '100%'}} variant='outlined'
                                        onClick={async ()=>{
                                            const response = await fetch(`https://yfapi.net/v11/finance/quoteSummary/${tickerSearch}${exchange!=='NONE' && '.'}${exchange}?lang=en&region=AU&modules=quoteType`, {
                                                method: 'GET',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                    'x-api-key': 'G5flF0vrwG2XWsk46q2TJa0bUYD7amhl7lgxRryH'
                                                }
                                            });
                                            const json = await response.json();
                                            console.log(json);
                                            if (json.quoteSummary) {
                                                if (json.quoteSummary.result && json.quoteSummary.result.length) {
                                                    setSearchResult(json.quoteSummary.result);
                                                }
                                            }
                                        }}
                                    >
                                        Srch
                                    </Button>
                                </Grid>
                                <>
                                    {searchResult && searchResult.map((item) => {
                                        return (
                                            <Grid
                                                key={item.quoteType.uuid}
                                                item className={styles.formRow} xs={12}
                                                style={{cursor: 'pointer'}}
                                                onClick={()=>{
                                                    setFormInitVal({
                                                        exchange: item.quoteType.exchange,
                                                        name: item.quoteType.longName,
                                                        ticker: item.quoteType.symbol,
                                                    })
                                                }}
                                            >
                                                {item.quoteType.longName}
                                            </Grid>
                                        );
                                    })}                            
                                </>
                            </Grid>
                        </Grid>
                    )}
                    <Grid item xs={manual=='auto' ? 6 : 12}>
                        <FormFields manual={manual} initialValues={formInitVal}/>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>;
    </div>
}
