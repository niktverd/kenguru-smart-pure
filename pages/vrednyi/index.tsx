// import { Button, Grid, TextField } from '@mui/material';
// import { style } from '@mui/system';
import type { NextPage } from 'next'
import { json } from 'stream/consumers';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

import styles from 'styles/Vrednyi.Index.module.css'

import instruments from '../../mocks/instruments.json';
import categories from '../../mocks/categories.json';
import { useState } from 'react';

type ListTemplate = Record<string, any>;

const listTemplate: ListTemplate = categories.reduce((result: ListTemplate, item) => {
    result[item.name] = [];
    return result;
}, {});

type InstrumentItemProps = {
    name: string;
    direction?: string;
    showName?: boolean;
    showDescription?: boolean;
    className?: string;
    onClick?: () => void;
};

const InstrumentItem: React.ReactNode = ({
    name,
    direction,
    showName = true,
    showDescription= true,
    className,
    onClick,
}: InstrumentItemProps) => {
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <div className={styles.imageHolder}>
                {!showDescription && showName&& <div>{name}</div>}
            </div>
            {showDescription && (
                <div className={styles.dataHolderolder}>
                    {name}
                    <div>{direction}</div>
                </div>
            )}
        </div>
    );
}

const AuthGetUser: NextPage = () => {
    const [selecteItemId, setSelecteItemId] = useState(null);
    const [showName, setShowName] = useState(true);
    const [showDescrtiption, setShowDescrtiption] = useState(true);
    let i=0;

    const {userInstruments, globalInstruments} = instruments.reduce((result, item) => {
        result.userInstruments[item.userCategory] = [{...item}].concat(result.userInstruments[item.userCategory]);
        result.globalInstruments[item.globalCategory] = [{...item}].concat(result.globalInstruments[item.globalCategory]);
        return result;
    }, {userInstruments: {...listTemplate}, globalInstruments: {...listTemplate}});

    return <div className={styles.container}>
        <div>
            selecteItem: {selecteItemId}
        </div>
        <div>
            {categories.map((category) => {
                return <div key={category.name} className={styles.row}>
                    <div className={styles.title}>
                        {category.name}
                    </div>
                    <div className={styles.instruments}>
                        {/* {JSON.stringify(userInstruments[category.name])} */}
                        {userInstruments[category.name].map((item: any) => {
                            return (
                                <InstrumentItem
                                    key={item.name}
                                    name={item.name}
                                    showName={true}
                                    showDescription={false}
                                    direction={item.userDirection}
                                    className={`
                                        ${styles.item}
                                        ${selecteItemId === item.id
                                            ? styles.selected
                                            : selecteItemId 
                                            ? styles.secondary
                                            : ''
                                        }
                                    `}
                                    onClick={() => { 
                                        setSelecteItemId(item.id === selecteItemId ? null : item.id)}
                                    }
                                />
                            );
                        })}
                    </div>
                    <div className={styles.globalInstrument}>
                        {globalInstruments[category.name].map((item: any) => {
                            if (selecteItemId !== item.id) {
                                return null;
                            }

                            return (
                                <InstrumentItem
                                    key={item.name}
                                    name={item.name}
                                    direction={item.globalDirection}
                                    className={styles.item}
                                    onClick={() => {}}
                                />
                            );
                        })}
                    </div>
                </div>
            })}
        </div>
        <div>
            Global position
        </div>
        <pre>
            {JSON.stringify(instruments, null, 5)}
        </pre>
        <pre>
            {JSON.stringify(categories, null, 5)}
        </pre>
    </div>
};

export default AuthGetUser;
