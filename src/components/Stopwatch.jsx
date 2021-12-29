import React from 'react';

import { useStyles } from '../styles';
import { Box, Container } from '@mui/material';

const Stopwatch = ({ hour, minute, second, miliSecond }) => {
    const classes = useStyles();

    return (
        <Container>
            <Box>
                <h1 className={classes.timer}>
                    {hour}
                    <span className={classes.timerLetter}>h</span> {" "}
                    {minute}
                    <span className={classes.timerLetter}>m</span> {" "}
                    {second}
                    <span className={classes.timerLetter}>s</span> {" "}
                    {miliSecond}
                </h1>
            </Box>
        </Container>
    );
};

export default Stopwatch;
