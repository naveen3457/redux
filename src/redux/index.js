import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";

import counterSlice from "./slice/counterSlice";

const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        cart:cartSlice.reducer
    }
})

export default store;