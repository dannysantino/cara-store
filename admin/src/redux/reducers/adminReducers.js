import { createSlice } from '@reduxjs/toolkit'

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        fetching: false,
        err: '',
        adminUser: null
    },
    reducers: {
        loginInit: state => {
            state.fetching = true;
            state.err = '';
        },
        loginSuccess: (state, action) => {
            state.fetching = false;
            state.err = '';
            state.adminUser = action.payload;
        },
        loginFailure: (state, action) => {
            state.fetching = false;
            state.err = action.payload;
            state.adminUser = null;
        },
        logout: () => { }
    }
});

export const { loginInit, loginSuccess, loginFailure, logout } = adminSlice.actions

export default adminSlice.reducer