import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "./modalsSlice"

export const store = configureStore({
    reducer:{
        modals: modalsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;