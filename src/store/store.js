import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Product/counterReducer";

export default configureStore({
    reducer:{
        counter: counterReducer,
    }
})