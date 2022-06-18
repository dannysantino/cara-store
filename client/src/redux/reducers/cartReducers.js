import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    quantity: 0,
    total: 0
}

const getTotal = products => Number(products.reduce((price, e) => (e.qty * e.price) + price, 0).toFixed(2));

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total = getTotal(state.products);
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.products = state.products.filter((_, i) => i !== action.payload.index);
            state.total = getTotal(state.products);
        },
        updateProduct: (state, action) => {
            state.products[state.products.findIndex((_, i) => i === action.payload.index)].qty = action.payload.qty;
            state.total = getTotal(state.products);
        },
        clearCart: () => initialState
    }
});

export const { addProduct, removeProduct, updateProduct, clearCart } = cartSlice.actions

export default cartSlice.reducer