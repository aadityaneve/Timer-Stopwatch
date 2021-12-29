import React from 'react';

import { useStyles } from '../styles';
import { Box, Container } from '@mui/material';

const Stopwatch = ({ hour, minute, second, miliSecond }) => {
    const classes = useStyles();

    return (
        <Container>
            <Box>
                <h1 className={classes.timerColor}>
                    {hour}h {minute}m {second}s {miliSecond}ms
                </h1>
            </Box>
        </Container>
    );
};

export default Stopwatch;
