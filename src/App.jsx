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
                <Box className={classes.startStopButtons}>
                    <Button
                        className={classes.timerButton}
                        onClick={() => handleToggleWatch(true)}
                        variant='outlined'
                    >
                        <HourglassEmptySharpIcon /> TIMER
                    </Button>
                    <Button
                        className={classes.stopwatchButton}
                        onClick={() => handleToggleWatch(false)}
                        variant='outlined'
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
                <Box className={classes.allButtons}>
                    <Box className={classes.leftButtons}>
                        <Button
                            className={classes.startButton}
                            onClick={() => (!timerInterval ? setTimer() : null)}
                            variant='outlined'
                            color='success'
                        >
                            START
                        </Button>
                        <Button
                            className={classes.resetButton}
                            onClick={() =>
                                timerInterval ? resetTimer() : null
                            }
                            variant='outlined'
                            color='error'
                        >
                            RESET
                        </Button>
                    </Box>

                    <Box className={classes.rightButtons}>
                        <Button variant='outlined' color='secondary'>
                            <VolumeUpSharpIcon />
                        </Button>
                        <Button variant='outlined' color='secondary'>
                            <FullscreenSharpIcon />
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default App;
