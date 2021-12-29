import React, { useState, useEffect } from 'react';

import { useStyles } from './styles';
import { Box, Button, Container } from '@mui/material';
import { Timer, Stopwatch } from './components';
import { VolumeUpSharp as VolumeUpSharpIcon } from '@mui/icons-material';
import { FullscreenSharp as FullscreenSharpIcon } from '@mui/icons-material';
import { HourglassEmptySharp as HourglassEmptySharpIcon } from '@mui/icons-material';
import { TimerSharp as TimerSharpIcon } from '@mui/icons-material';

let timerInterval;
function App() {
    const classes = useStyles();
    const [toggleWatch, setToggleWatch] = useState(true);

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(5);
    const [second, setSecond] = useState(0);
    const [miliSecond, setMiliSecond] = useState(0);

    const setTimer = () => {
        if (toggleWatch) {
            setHour(0);
            setMinute(1);
            setSecond(10);

            timerInterval = setInterval(() => {
                setSecond((prevState) => prevState - 1);
            }, 1000);
        } else {
            setHour(0);
            setMinute(0);
            setSecond(0);
            setMiliSecond(0);

            timerInterval = setInterval(() => {
                setMiliSecond((prevState) => prevState + 1);
            }, 1);
        }
    };

    const resetTimer = () => {
        setHour(0);
        setMinute(0);
        setSecond(0);
        setMiliSecond(0);
        clearInterval(timerInterval);
        timerInterval = undefined;
    };

    useEffect(() => {
        if (second === 0 && minute === 0 && hour === 0 && miliSecond === 0) {
            clearInterval(timerInterval);
        }

        if (toggleWatch) {
            if (second < 0) {
                setMinute((prevState) => prevState - 1);
                setSecond(60);
            }
            if (minute < 0) {
                setHour((prevState) => prevState - 1);
                setMinute(60);
            }
            if (hour < 0) {
                setHour(0);
            }
        } else {
            if (miliSecond > 99) {
                setMiliSecond(0);
                setSecond((prevState) => prevState + 1);
            }
            if (second > 60) {
                setSecond(0);
                setMinute((prevState) => prevState + 1);
            }
            if (minute > 60) {
                setHour((prevState) => prevState + 1);
                setMinute(0);
            }
        }
    }, [toggleWatch ? second : miliSecond]);

    const handleToggleWatch = (bool) => {
        setToggleWatch(bool);

        bool ? resetTimer() : resetTimer();
    };

    return (
        <div className='App'>
            <Container maxWidth='sm' className={classes.root}>
                <Box>
                    <Button
                        onClick={() => handleToggleWatch(true)}
                        variant='contained'
                    >
                        <HourglassEmptySharpIcon /> TIMER
                    </Button>
                    <Button
                        onClick={() => handleToggleWatch(false)}
                        variant='contained'
                    >
                        <TimerSharpIcon /> STOPWATCH
                    </Button>
                </Box>
                <Box>
                    {toggleWatch ? (
                        <Timer hour={hour} minute={minute} second={second} />
                    ) : (
                        <Stopwatch
                            hour={hour}
                            minute={minute}
                            second={second}
                            miliSecond={miliSecond}
                        />
                    )}
                </Box>
                <Box>
                    <Button
                        onClick={() => (!timerInterval ? setTimer() : null)}
                        variant='contained'
                        color='success'
                    >
                        START
                    </Button>
                    <Button
                        onClick={() => (timerInterval ? resetTimer() : null)}
                        variant='contained'
                        color='secondary'
                    >
                        RESET
                    </Button>

                    <Button variant='contained' color='secondary'>
                        <VolumeUpSharpIcon />
                    </Button>
                    <Button variant='contained' color='secondary'>
                        <FullscreenSharpIcon />
                    </Button>
                </Box>
            </Container>
        </div>
    );
}

export default App;
