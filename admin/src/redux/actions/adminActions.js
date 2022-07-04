import { loginInit, loginSuccess, loginFailure } from '../reducers/adminReducers'
import { publicRequest, setError } from '../../utils/requestMethods'

export const login = async (dispatch, user) => {
    dispatch(loginInit());
    try {
        const { data: { _id, name, username, isAdmin, img, role, token } } = await publicRequest.post('/auth/login', user);
        if (isAdmin) {
            dispatch(loginSuccess({
                _id,
                name,
                username,
                isAdmin,
                img,
                role,
                token
            }));

            return { isAdmin, token }
        } else if (!isAdmin) {
            throw new Error('Access denied! You are not an admin');
        }
    } catch (err) {
        dispatch(loginFailure(setError(err)));
        if (err.response && err.response.status >= 500) {
            throw new Error('Internal server error');
        }
        throw new Error(setError(err));
    }
}