import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state, action)=>{
            state.value +=1;
        },
        decrement:(state, action)=>{
            state.value -=1;
        },
        increaseBYAmount:(state, action)=>{
            state.value +=action.payload;
        },
        decreaseBYAmount:(state, action)=>{
            state.value -=action.payload;
        }
    }
});

export const {increment, decrement, increaseBYAmount,decreaseBYAmount} = counterSlice.actions;

export default counterSlice;