// store su dung quan ly state toan cuc ung dung

import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
};
const store = configureStore({
    reducer: {},
    preloadedState: initialState,
});
export default store;