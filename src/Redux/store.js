import {configureStore} from "@reduxjs/toolkit";
import productSliceReducer from "./ProductsSlice";

const store = configureStore({
     reducer : {
     products : productSliceReducer
     }
})

export default store