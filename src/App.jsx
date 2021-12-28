import React, { useState } from 'react';

import { useStyles } from './styles';
import { Box, Button, Container } from '@mui/material';
import { Timer, Stopwatch } from './components';
import { VolumeUpSharp as VolumeUpSharpIcon } from '@mui/icons-material';
import { FullscreenSharp as FullscreenSharpIcon } from '@mui/icons-material';
import { HourglassEmptySharp as HourglassEmptySharpIcon } from '@mui/icons-material';
import { TimerSharp as TimerSharpIcon } from '@mui/icons-material';

function App() {
    const classes = useStyles();
    const [toggleWatch, setToggleWatch] = useState(true);

    const handleToggleWatch = (bool) => {
        setToggleWatch(bool);
    };

    return (
        <div className='App'>
            <Container maxWidth='sm' className='classes.root'>
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
                <Box>{toggleWatch ? <Timer /> : <Stopwatch />}</Box>
                <Box>
                    <Button variant='contained' color='success'>
                        START
                    </Button>
                    <Button variant='contained' color='secondary'>
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
