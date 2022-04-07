import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        error: '',
        currentUser: null
    },
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
        }
    }
});

export const { loginInit, loginSuccess, loginFailure } = userSlice.actions

export default userSlice.reducer