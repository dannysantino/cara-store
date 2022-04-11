import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthRoute = ({ children }) => {
    const { currentUser } = useSelector(state => state.user);
    return currentUser ? <Navigate to={-1} replace /> : children
}

export default AuthRoute
