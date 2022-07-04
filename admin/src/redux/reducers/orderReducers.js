import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        fetching: false,
        error: '',
        orders: []
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
        getOrdersSuccess: (state, action) => {
            state.fetching = false;
            state.error = '';
            state.orders = action.payload;
        },
        updateOrderSuccess: (state, action) => {
            state.fetching = false;
            state.error = '';
            state.orders[state.orders.findIndex(e => e._id === action.payload.id)] = action.payload.data;
        },
        cancelOrderSuccess: (state, action) => {
            state.fetching = false;
            state.error = '';
            state.orders.splice(state.orders.findIndex(e => e._id === action.payload), 1);
        }
    }
});

export const {
    actionInit,
    actionFailure,
    getOrdersSuccess,
    updateOrderSuccess,
    cancelOrderSuccess
} = orderSlice.actions;

export default orderSlice.reducer