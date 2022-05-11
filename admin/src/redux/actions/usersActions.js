import {
    actionInit,
    actionFailure,
    getUsersSuccess,
    addUserSucess,
    updateUserSuccess,
    deleteUserSuccess
} from '../reducers/usersReducers'
import { userRequest, setError } from '../../utils/requestMethods'

export const getUsers = async dispatch => {
    dispatch(actionInit());
    try {
        const { data } = await userRequest.get('/users/admin/useraccounts');
        dispatch(getUsersSuccess(data));
    } catch (err) {
        dispatch(actionFailure(setError(err)));
    }
}

export const addNewUser = async (dispatch, formData) => {
    dispatch(actionInit());
    try {
        const { data } = await userRequest.post('/users/admin/add', formData);
        dispatch(addUserSucess(data));
    } catch (err) {
        dispatch(actionFailure(setError(err)));
        throw new Error(setError(err));
    }
}

export const updateUser = async (dispatch, id, formData) => {
    dispatch(actionInit());
    try {
        const { data } = await userRequest.put(`/users/update/${id}`, formData);
        dispatch(updateUserSuccess({ id, data }));
        return data.name;
    } catch (err) {
        dispatch(actionFailure(setError(err)));
        throw new Error(setError(err));
    }
}

export const deleteUser = async (dispatch, id) => {
    dispatch(actionInit());
    try {
        await userRequest.delete(`/users/${id}`);
        dispatch(deleteUserSuccess(id));
    } catch (err) {
        dispatch(actionFailure(setError(err)));
    }
}