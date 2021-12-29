import React, { useState, useEffect } from 'react';

import { useStyles } from '../styles';
import { Box, Button, Container } from '@mui/material';

const Timer = ({ hour, minute, second }) => {
    const classes = useStyles();

    return (
        <Container>
            <Box>
                <h1 className={classes.timerColor}>
                    {hour}h {minute}m {second}s
                </h1>
            </Box>
        </Container>
    );
};

export default Timer;
