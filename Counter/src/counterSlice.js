import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({

    name : "counter",
    initialState:{count: 0},
    reducers:{
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByValue: (state, action) => {
            state.count =  action.payload + action.payload;
        }
    },    
});

export const {increment, decrement, incrementByValue} = counterSlice.actions;

export default counterSlice.reducer;