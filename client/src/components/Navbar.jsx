import { useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { verifyToken } from '../utils/requestMethods'
import { logout } from '../redux/actions/userActions'
import { userAlert } from '../utils/alerts'

import logo from '../assets/img/logo.png'
import '../stylesheets/Navbar.css'

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart, user: { currentUser } } = useSelector(state => state);

    const handleClick = e => {
        const nav = document.getElementById('navbar');
        if (e.target.id === 'bar') {
            nav.classList.add('active');
        } else if (e.target.id === 'close-btn') {
            nav.classList.remove('active');
        }
    }

    const handleLogout = () => {
        logout(dispatch);
        userAlert('info', 'You have logged out', '');
    }

    const handleNavigate = path => navigate(path, {
        state: location.state
            ? location.state
            : { from: location }
    });

    useEffect(() => {
        if (currentUser && !verifyToken()) {
            logout(dispatch);
            userAlert('warning', 'Your session has expired and you have been logged out', '');
        }
    }, [currentUser, dispatch, location]);

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
                        <li className='nav-li'><NavLink to='/'>Home</NavLink></li>
                        <li className='nav-li'><NavLink to='/shop'>Shop</NavLink></li>
                        <li className='nav-li'><NavLink to='/blog'>Blog</NavLink></li>
                        <li className='nav-li'><NavLink to='/about'>About Us</NavLink></li>
                        <li className='nav-li'><NavLink to='/contact'>Contact</NavLink></li>
                        <li id='nav-cart'>
                            <NavLink to='/cart'>
                                <i className='fa-solid fa-cart-shopping'></i>
                                <span className='badge rounded-pill bg-danger qty'>
                                    {cart.quantity}
                                </span>
                            </NavLink>
                        </li>
                        {
                            currentUser
                                ? (
                                    <>
                                        <li className='auth-li image-li'>
                                            <Link to={`/profile/${currentUser._id}`}>
                                                <img
                                                    src={currentUser.img}
                                                    className='user-img img-thumbnail'
                                                    alt={currentUser.name}
                                                />
                                            </Link>
                                        </li>
                                        <li className='auth-li logout-li'>
                                            <button
                                                className='btn btn-info logout'
                                                onClick={() => handleLogout()}
                                            >
                                                LOG OUT
                                            </button>
                                        </li>
                                    </>
                                )
                                : (
                                    <>
                                        <li className='auth-li login-li'>
                                            <button
                                                className='btn btn-success login'
                                                onClick={() => handleNavigate('/login')}
                                            >
                                                LOG IN
                                            </button>
                                        </li>
                                        <li className='auth-li register-li'>
                                            <button
                                                className='btn btn-primary register'
                                                onClick={() => handleNavigate('/register')}
                                            >
                                                SIGN UP
                                            </button>
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
