import { loginFailure, loginInit, loginSuccess } from './userRedux'
import { publicRequest } from '../utils/requestMethods'

export const login = async (dispatch, user) => {
    dispatch(loginInit());
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure(err.response.data));
    }
}