import React from 'react';

import { useStyles } from '../styles';
import {
    Box,
    Container,
    FormControl,
    OutlinedInput,
    InputAdornment,
} from '@mui/material';

const Stopwatch = ({
    hour,
    minute,
    second,
    miliSecond,
    setHour,
    setMinute,
    setSecond,
    setMiliSecond,
    startTimer,
}) => {
    const classes = useStyles();

    return (
        <Container>
            <Box style={{ width: '101%' }}>
                <FormControl sx={{ m: 2, width: '17ch' }} variant='outlined'>
                    <OutlinedInput
                        disabled={startTimer}
                        type='number'
                        style={{
                            color: 'white',
                            backgroundColor: 'grey',
                            fontSize: '55px',
                        }}
                        id='outlined-adornment-weight'
                        value={hour}
                        onChange={(e) => {
                            let num = Number(e.target.value);
                            if (num <= 24 && num >= 0) {
                                setHour(num);
                            } else if (num > 24) {
                                setHour(24);
                            } else if (num < 0 || num === /^[0]+$/) {
                                setHour(0);
                            }
                        }}
                        endAdornment={
                            <InputAdornment position='end'>H</InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl sx={{ m: 2, width: '17ch' }} variant='outlined'>
                    <OutlinedInput
                        disabled={startTimer}
                        type='number'
                        style={{
                            color: 'white',
                            backgroundColor: 'grey',
                            fontSize: '55px',
                        }}
                        id='outlined-adornment-weight'
                        value={minute}
                        onChange={(e) => {
                            let num = Number(e.target.value);
                            if (num <= 60 && num >= 0) {
                                setMinute(num);
                            } else if (num > 60) {
                                setMinute(60);
                            } else if (num < 0 || num === /^[0]+$/) {
                                setMinute(0);
                            }
                        }}
                        endAdornment={
                            <InputAdornment position='end'>M</InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl sx={{ m: 2, width: '17ch' }} variant='outlined'>
                    <OutlinedInput
                        disabled={startTimer}
                        type='number'
                        style={{
                            color: 'white',
                            backgroundColor: 'grey',
                            fontSize: '55px',
                        }}
                        id='outlined-adornment-weight'
                        value={second}
                        onChange={(e) => {
                            let num = Number(e.target.value);
                            if (num <= 60 && num >= 0) {
                                setSecond(num);
                            } else if (num > 60) {
                                setSecond(60);
                            } else if (num < 0 || num == /^[0]+$/) {
                                setSecond(0);
                            }
                        }}
                        endAdornment={
                            <InputAdornment position='end'>S</InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl sx={{ m: 2, width: '17ch' }} variant='outlined'>
                    <OutlinedInput
                        disabled
                        type='number'
                        style={{
                            color: 'white',
                            backgroundColor: 'grey',
                            fontSize: '55px',
                        }}
                        id='outlined-adornment-weight'
                        value={miliSecond}
                        onChange={(e) => {
                            let num = Number(e.target.value);
                            setMiliSecond(num);
                        }}
                        endAdornment={
                            <InputAdornment position='end'>MS</InputAdornment>
                        }
                    />
                </FormControl>

                {/* <h1 className={classes.timer}>
                    {hour}
                    <span className={classes.timerLetter}>h</span> {" "}
                    {minute}
                    <span className={classes.timerLetter}>m</span> {" "}
                    {second}
                    <span className={classes.timerLetter}>s</span> {" "}
                    {miliSecond}
                </h1> */}
            </Box>
        </Container>
    );
};

export default Stopwatch;
