import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: '',
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginInit: state => {
            state.loading = true;
            state.error = '';
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.error = '';
            state.currentUser = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logOut: () => initialState
    }
});

export const { loginInit, loginSuccess, loginFailure, logOut } = userSlice.actions

export default userSlice.reducer