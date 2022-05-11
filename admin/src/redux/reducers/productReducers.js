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
        },
        addProductSuccess: (state, action) => {
            state.fetching = false;
            state.error = '';
            state.products.push(action.payload);
        },
        updateProductSuccess: (state, action) => {
            state.fetching = false;
            state.error = '';
            state.products[state.products.findIndex(e => e._id === action.payload.id)] = action.payload.data;
        },
        deleteProductSuccess: (state, action) => {
            state.fetching = false;
            state.error = '';
            state.products.splice(state.products.findIndex(e => e._id === action.payload), 1);
        }
    }
});

export const {
    actionInit,
    actionFailure,
    getProductsSuccess,
    addProductSuccess,
    updateProductSuccess,
    deleteProductSuccess
} = productSlice.actions

export default productSlice.reducer