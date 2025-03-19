import {configureStore} from "@reduxjs/toolkit";

import {persistStore, persistReducer} from "redux-persist";

import storage from "redux-persist/lib/storage";

import productReducer from "./productSlice"; 

//Redux persist config
const persistConfig = {
    key: "root",
    storage,
}
//Wraps our reducer so that the state is saved in local storage
const persistedReducer = persistReducer(persistConfig, productReducer);

// Creates the Redux store
export const store = configureStore({
    reducer:{
        products: productReducer, // Add our product slice
    },
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false, //needed for redux persist
        })
})

//persistor for redux Persist
export const persistor = persistStore(store);

//exporting store to use in App
export default store;