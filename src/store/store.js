import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./shopping-cart/cartSlice";
import cartUiReducer from "./shopping-cart/cartUiSlice";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUi:cartUiReducer,
  },
});
export default store;
