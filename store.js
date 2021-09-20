import { configureStore } from '@reduxjs/toolkit';
import navReducer from "./slices/NavSlicee";

export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
});