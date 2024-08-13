import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    wishlist:[]
  
}

const addcartSlice = createSlice({
    name: "addcart",
    initialState: initialState,
    reducers:{
        add(state, action){
            // console.log(state,"Hiii")
            state.cart.push(action.payload)  
            
        },
        remove(state,action){
            console.log("remove sction", action.payload)
            state.cart.splice(state.cart.findIndex((arrow)=>arrow.id===action.payload),1);
        },
        addwl(state, action) {
            state.wishlist.push(action.payload);`   `
        }
      
    }
})
    

export const {add,remove,addwl} = addcartSlice.actions;
export default addcartSlice.reducer;