import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { userRequest, verifyToken } from '../utils/requestMethods'

const AuthRoute = ({ children }) => {
    const location = useLocation();
    const { adminUser } = useSelector(state => state.admin);

    const isVerified = verifyToken();
    const state = { from: location }

    if (adminUser && !isVerified) {
        state.errorMessage = 'Session expired. Please log in to continue'
    } else if (adminUser && isVerified) {
        userRequest.interceptors.request.use(config => {
            config.headers['token'] = `Bearer ${localStorage.getItem('adminToken')}`;
            return config;
        });
    }

    return adminUser && adminUser.isAdmin && isVerified
        ? children
        : <Navigate to='/login' state={state} replace />
}

export default AuthRoute
