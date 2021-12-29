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
                            if (e.target.value <= 24 && e.target.value >= 0) {
                                setHour(e.target.value);
                            } else if (e.target.value > 24) {
                                setHour(24);
                            } else if (
                                e.target.value < 0 ||
                                e.target.value === /^[0]+$/
                            ) {
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
                            if (e.target.value <= 60 && e.target.value >= 0) {
                                setMinute(e.target.value);
                            } else if (e.target.value > 60) {
                                setMinute(60);
                            } else if (
                                e.target.value < 0 ||
                                e.target.value === /^[0]+$/
                            ) {
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
                            if (e.target.value <= 60 && e.target.value >= 0) {
                                setSecond(e.target.value);
                            } else if (e.target.value > 60) {
                                setSecond(60);
                            } else if (
                                e.target.value < 0 ||
                                e.target.value == /^[0]+$/
                            ) {
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
                            setMiliSecond(e.target.value);
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
