//reducer ng eng mean duty tver ey klas sorsa knong ng

import { createSlice } from "@reduxjs/toolkit";
import { create } from "domain";

//Define Type or Interface
export interface CounterState{
    value: number;
}


//1.define initialState
const initialState: CounterState = {
    value:10
}

//2.define Reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
        state.value += 1
    },
    decrement: (state) => {
        state.value -= 1
    }
  }
})

//export action of reducer
export const {increment, decrement} = counterSlice.actions

//3. Export Reducer 
export default counterSlice.reducer