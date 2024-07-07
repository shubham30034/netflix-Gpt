import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";


const appStore = configureStore({
    reducer : {
        user : userSlice,
        movies : moviesReducer,
        gpt : gptSlice,
        config : configSlice
    },
})

export default appStore