import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterReducer";

export default configureStore({
    reducer:{
        counter: counterReducer,
    }
})


//could you tell some consequences that might happen to customers who bought nokia 1100 phone in 2008 ???