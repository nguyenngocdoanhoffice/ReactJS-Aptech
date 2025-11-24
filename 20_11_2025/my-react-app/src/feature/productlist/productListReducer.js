import { createSlice } from "@reduxjs/toolkit";
const productListSlice = createSlice({
    name: "productList",
    initialState: {
        products: [],
    },
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {

    },
});
export const { setProducts } = productListSlice.actions;
export default productListSlice.reducer;