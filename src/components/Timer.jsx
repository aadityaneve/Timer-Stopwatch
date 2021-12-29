import React, { useState, useEffect } from 'react';

import { useStyles } from '../styles';
import { Box, Button, Container, TextField } from '@mui/material';

const Timer = ({ hour, minute, second }) => {
    const classes = useStyles();

    return (
        <Container>
            <Box>
                <h1 className={classes.timer}>
                    {hour}
                    <span className={classes.timerLetter}>h</span> {minute}
                    <span className={classes.timerLetter}>m</span> {second}
                    <span className={classes.timerLetter}>s</span>{' '}
                </h1>
            </Box>
        </Container>
    );
};

export default Timer;
