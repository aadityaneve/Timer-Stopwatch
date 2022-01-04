import React from 'react';
import { Watch } from './components';
import { useStyles } from './styles';

const App = () => {

    const classes = useStyles();

    return (
        <div className={classes.app}>
            <Watch />
        </div>
    );
};

export default App;
