import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './addcartSlice'




const store = configureStore({
    reducer:{
        cart: cartReducer,
       
    
      
    }
})

export default store;