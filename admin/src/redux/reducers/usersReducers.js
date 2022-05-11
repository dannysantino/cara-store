import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        fetching: false,
        error: '',
        users: []
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
        getUsersSuccess: (state, action) => {
            state.fetching = false;
            state.error = '';
            state.users = action.payload;
        },
        addUserSucess: (state, action) => {
            state.fetching = false;
            state.error = '';
            state.users.push(action.payload);
        },
        updateUserSuccess: (state, action) => {
            state.fetching = false;
            state.error = '';
            state.users[state.users.findIndex(e => e._id === action.payload.id)] = action.payload.data;
        },
        deleteUserSuccess: (state, action) => {
            state.fetching = false;
            state.error = '';
            state.users.splice(state.users.findIndex(e => e._id === action.payload), 1);
        }
    }
});

export const {
    actionInit,
    actionFailure,
    getUsersSuccess,
    addUserSucess,
    updateUserSuccess,
    deleteUserSuccess
} = usersSlice.actions

export default usersSlice.reducer