import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    quantity: 0,
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total = Number(((action.payload.price * action.payload.qty) + state.total).toFixed(2));
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.products = state.products.filter((_, i) => i !== action.payload.index);
            state.total = Number((state.total - (action.payload.price * action.payload.qty)).toFixed(2));
        },
        updateProduct: (state, action) => {
            state.products[state.products.findIndex((_, i) => i === action.payload.index)].qty = Number(action.payload.qty);
            state.total = Number(((action.payload.price * action.payload.qty) + state.total).toFixed(2));
        },
        clearCart: () => initialState
    }
});

export const { addProduct, removeProduct, updateProduct, clearCart } = cartSlice.actions

export default cartSlice.reducer