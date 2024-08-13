import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    product:[],
    wishlist:[],
    cart:[]
  }

export const counterSlice = createSlice({
    name: 'ecommerce',
    initialState,
    reducers: {
        addProduct:(state, action)=>{
            
        }

    }
})