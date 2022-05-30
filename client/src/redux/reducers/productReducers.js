import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'products',
    initialState: {
        fetching: false,
        error: '',
        products: []
    },
    reducers: {
        actionInit: state => {
            state.fetching = true;
            state.error = '';
        },
        actionFailure: (state, action) => {
            state.fetching = false;
            state.error = action.payload;
        },
        getProductsSuccess: (state, action) => {
            state.fetching = false;
            state.error = '';
            state.products = action.payload;
        }
    }
});

export const { actionInit, actionFailure, getProductsSuccess } = productSlice.actions

export default productSlice.reducer