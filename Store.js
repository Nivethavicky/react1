import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Slices/customerSlice"
export const store= configureStore({
  
    //devTools: true,
    reducer:{
     customers: customerReducer
  }
})