import {configureStore} from "@reduxjs/toolkit";
import {mainReducer} from "../reducer/reducer";

export const store = configureStore({
    reducer: mainReducer
})

