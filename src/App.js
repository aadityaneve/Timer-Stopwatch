import React from 'react';

import { useStyles } from './styles';
import { Button } from '@mui/material';

function App() {
    const classes = useStyles();
    return (
        <div className='App'>
            <Button className={classes.root}>Aditya Neve</Button>
        </div>
    );
}

export default App;
