import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { verifyToken } from '../utils/requestMethods'
import { logout } from '../redux/reducers/adminReducers'

import '../stylesheets/Header.css'

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { admin: { adminUser } } = useSelector(state => state);
    const [isVerified, setIsVerified] = useState(verifyToken());

    useEffect(() => {
        setIsVerified(verifyToken());
    }, [location]);

    return (
        <header className='navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm px-sm-4'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand'>dashmin</Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavAltMarkup'
                    aria-controls='navbarNavAltMarkup'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav ms-auto'>
                        {
                            adminUser && isVerified && (
                                <>
                                    <NavLink to='notifications' className='nav-link disabled'>
                                        <i className='fa-regular fa-bell'></i>
                                        <span className='badge rounded-pill bg-danger'>8</span>
                                    </NavLink>
                                    <NavLink
                                        to='global'
                                        className='nav-link disabled'>
                                        <i className='fa-solid fa-globe'></i>
                                    </NavLink>
                                    <NavLink
                                        to='settings'
                                        className='nav-link disabled'>
                                        <i className='fa-solid fa-gear'></i>
                                    </NavLink>
                                    <NavLink
                                        to={`user/${adminUser._id}`}
                                        className='nav-link'>
                                        <img src={adminUser.img} alt={adminUser.name} />
                                    </NavLink>
                                    <button
                                        className='btn btn-info'
                                        onClick={() => dispatch(logout())}
                                    >
                                        LOG OUT
                                    </button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
