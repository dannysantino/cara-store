import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { userRequest, verifyToken } from '../utils/requestMethods'
import { logout } from '../redux/actions/userActions'
import { userAlert } from '../utils/alerts'

import logo from '../assets/img/logo.png'
import '../stylesheets/Navbar.css'

const Navbar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { cart, user } = useSelector(state => state);
    const [isVerified, setIsVerified] = useState(verifyToken());

    const handleClick = e => {
        const nav = document.getElementById('navbar');
        if (e.target.id === 'bar') {
            nav.classList.add('active');
        } else if (e.target.id === 'close-btn') {
            nav.classList.remove('active');
        }
    }

    const logUserOut = () => {
        logout(dispatch);
        userAlert('info', 'You have logged out', '');
    }

    useEffect(() => {
        setIsVerified(verifyToken());
    }, [location]);

    useEffect(() => {
        if (user.currentUser && !verifyToken()) {
            logout(dispatch);
            userAlert('warning', 'Your session has expired and you have been logged out', '');
        } else if (user.currentUser && isVerified) {
            userRequest.interceptors.request.use(config => {
                config.headers['token'] = `Bearer ${localStorage.getItem('userToken')}`;
                return config;
            });
        }
    }, [user.currentUser, isVerified, dispatch, location]);

    return (
        <>
            <nav className='shadow' id='nav'>
                <Link to='/'>
                    <img
                        src={logo}
                        className='logo'
                        alt='cara-store-logo'
                    />
                </Link>
                <div className='wrapper'>
                    <ul id='navbar'>
                        <li className='nav-li'>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to='/shop'>Shop</NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to='/blog'>Blog</NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to='/about'>About Us</NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                        <li id='nav-cart'>
                            <NavLink to='/cart'>
                                <i className='fa-solid fa-cart-shopping'></i>
                                <span className='badge rounded-pill bg-danger qty'>
                                    {cart.quantity}
                                </span>
                            </NavLink>
                        </li>
                        {
                            user.currentUser
                                ? (
                                    <>
                                        <li className='auth-li image'>
                                            <Link to={`/profile/${user.currentUser._id}`}>
                                                <img
                                                    src={user.currentUser.img}
                                                    className='img-thumbnail'
                                                    alt={user.currentUser.name}
                                                />
                                            </Link>
                                        </li>
                                        <li className='auth-li logout'>
                                            <button
                                                className='btn btn-info'
                                                onClick={() => logUserOut()}
                                            >
                                                LOG OUT
                                            </button>
                                        </li>
                                    </>
                                )
                                : (
                                    <>
                                        <li className='auth-li login'>
                                            <Link to='/login' className='btn btn-success'>
                                                LOG IN
                                            </Link>
                                        </li>
                                        <li className='auth-li register'>
                                            <Link to='/register' className='btn btn-primary'>
                                                SIGN UP
                                            </Link>
                                        </li>
                                    </>
                                )
                        }
                        <i
                            className='fa-regular fa-circle-xmark'
                            id='close-btn'
                            onClick={handleClick}
                        ></i>
                    </ul>
                </div>
                <div id='menu-btn'>
                    <NavLink to='/cart'>
                        <i className='fa-solid fa-cart-shopping'></i>
                        <span className='badge rounded-pill bg-danger qty'>
                            {cart.quantity}
                        </span>
                    </NavLink>
                    <i
                        className='fa-solid fa-outdent'
                        id='bar'
                        onClick={handleClick}></i>
                </div>
            </nav>
            <div className='d-inline-block' id='user-alert'></div>
        </>
    )
}

export default Navbar
