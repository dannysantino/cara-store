import { loginInit, loginFailure, loginSuccess, logOut } from '../reducers/userReducers'
import { publicRequest, setError } from '../../utils/requestMethods'

export const login = async (dispatch, user) => {
    dispatch(loginInit());
    try {
        const { data } = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(data));
        return { user: data.name, token: data.token }
    } catch (err) {
        dispatch(loginFailure(setError(err)));
        throw new Error(setError(err));
    }
}

export const logout = async dispatch => {
    try {
        dispatch(logOut());
        localStorage.removeItem('userToken');
    } catch (err) {
        console.error(setError(err));
    }
}