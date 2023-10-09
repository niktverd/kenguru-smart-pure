import { Button, Grid, TextField } from '@mui/material';
import { style } from '@mui/system';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from 'styles/Auth.module.css'

const AuthGetUser: NextPage = () => {
    const [fixedName, setFixedName] = useState<boolean>(false);
    const [typedName, setTypedName] = useState<string>('');
    const router = useRouter();
    const {userName} = router.query;

    useEffect(() => {
        if (userName) {
            setTypedName(userName as string); 
            setFixedName(Boolean(userName)); 
        }
    }, [userName]);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTypedName(event.target.value);
    }

    
    return (
        <div className={styles.container}>
            <div className={styles.paper}>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            color="secondary"
                            label="Login"
                            fullWidth
                            disabled={fixedName}
                            value={typedName}
                            onChange={handleChange}
                            className={styles.textField}
                        />
                        <Button
                            fullWidth
                            color="secondary"
                            variant="outlined"
                            onClick={() => setFixedName(true)}
                        >
                            Enter password
                        </Button>
                    </Grid>

                </Grid>

            </div>
        </div>
    );
};

export default AuthGetUser;
