import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total = Number(((action.payload.price * action.payload.qty) + state.total).toFixed(2));
        }
    }
});

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer