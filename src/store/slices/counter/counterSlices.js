import { createSlice } from '@reduxjs/toolkit';

export const counterSlice= createSlice({
    name: 'counter',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: state =>{
            state.counter -= 1
        },
        incrementByAmount: (state, action) => {
            state.counter += action.payload
        },
        reset: state =>{
            state.counter = 10;
        },
    },
})

export const { 
    increment ,
    decrement,
    incrementByAmount,
    reset
} = counterSlice.actions;
