import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    app: {
        backgroundColor: '#2D4263',
        padding: '33vh 0vw',
    },
    root: {
        border: '2px solid coral',
        padding: 2,
        backgroundColor: '#ECDBBA',
        maxWidth: '50',
    },
    timer: {
        color: 'rgb(232,234,237)',
        fontSize: 55,
        fontWeight: 400,
    },
    timerLetter: {
        color: 'rgb(232,234,237)',
        fontSize: 25,
        fontWeight: 600,
    },
    startStopButtons: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    timerButton: {
        width: '50%',
    },
    stopwatchButton: {
        width: '50%',
    },
    allButtons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    leftButtons: {
        flexBasis: '40%',
        display: 'flex',
        justifyContent: 'space-around',
    },
    startButton: {
        width: '100%',
    },
    resetButton: {
        width: '100%',
    },
    rightButtons: {
        flexBasis: '40%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    selectTime: {
        display: 'flex',
        justifyContent: 'space-around',
        flexBasis: '70%',
    },
});

export default useStyles;
