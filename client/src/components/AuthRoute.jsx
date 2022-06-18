import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { userRequest, verifyToken } from '../utils/requestMethods'

const AuthRoute = ({ children }) => {
    const location = useLocation();
    const { currentUser } = useSelector(state => state.user);

    const isVerified = verifyToken();
    const state = { from: location }

    if (!currentUser || !isVerified) {
        state.errorMessage = 'You must be logged in to view this page...'
    } else if (currentUser && isVerified) {
        userRequest.interceptors.request.use(config => {
            config.headers['token'] = `Bearer ${localStorage.getItem('userToken')}`;
            return config;
        });
    }

    return currentUser && isVerified
        ? children
        : <Navigate to='/login' state={state} replace />
}

export default AuthRoute
