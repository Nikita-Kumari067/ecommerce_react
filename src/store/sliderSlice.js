import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
    length:4

}


const sliderSlice=createSlice({
    name:'sliderSlice',
    initialState:initialState,
    reducers:{
        nextSlide(state, action){
            console.log("action", action)
            console.log("state",state)
            state.value=action.payload>state.length? 0 :action.payload

        },
        prevSlide(state, action){
            state.value=action.payload<0 ? state.length : action.payload
        },
        dotSlide(state, action){}

    }
})
export const{nextSlide, prevSlide,dotSlide}=sliderSlice.actions
export default sliderSlice.reducer