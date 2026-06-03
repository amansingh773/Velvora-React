import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getProductData = createAsyncThunk("getApiData", async()=>{
     const apiData = await fetch("https://fakestoreapi.com/products");
     const data = await apiData.json();
     return data
})

const ProductSlice = createSlice({

     name : "getData",

     initialState : {
          loading : false,
          productData : [],
          error : null,
          category : "all"
     },

     reducers : {
               setCategory : (state,action)=>{
                    state.category = action.payload
               }
     },
     
     extraReducers : (builder)=>{
          builder
          .addCase(getProductData.pending,(state,action)=>{
               return {
                    ...state,
                    loading : true
               }
          })
          .addCase(getProductData.fulfilled,(state,action)=>{
               return{
                    ...state,
                    loading : false,
                    productData : action.payload
               }
          })
          .addCase(getProductData.rejected,(state,action)=>{
               return{
                    ...state,
                    loading : false,
                    error : action.error.message
               }
          })
     }
     
})

export const {setCategory} = ProductSlice.actions
export default ProductSlice.reducer
