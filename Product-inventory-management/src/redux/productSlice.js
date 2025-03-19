//necessary function from roolkit
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk("products/fetchProducts", 
    async() => {
    const response = await fetch(API_URL);
    return response.json();
    
    }
);


//Create Redux slice
const productSlice = createSlice({
    name: "products",
    initialState:{
        items:[],
        status: "idle", // 'idle' | loading | succeeded | failed
        error:null, //stores error messages if API fails
    },
    //used for synchrounous actions
    reducers:{}, // want to add update/deteteand adding products
    //used of Async actions 


    extraReducers:(builder) => {
        builder // builder is have three types of methods
        //used to see the staus and send the payload to items

        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
        })

        //pending means shows loading as status
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading";
            state.error = null;
        })

        //handle error status and send error reducer 
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload || "Something went wrong";
        })

        //want to add default function 
        /*
        .addDefaultCase(fetchProducts => {
            console.log("unknown error");
        })
        */
    },
})

//export reducer to the store.js
export default productSlice.reducer;