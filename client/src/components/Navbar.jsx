import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import logo from '../assets/img/logo.png'
import '../stylesheets/Navbar.css'

const Navbar = () => {
    const { cart, user } = useSelector(state => state);

    const handleClick = e => {
        const nav = document.getElementById('navbar');
        if (e.target.id === 'bar') {
            nav.classList.add('active');
        } else if (e.target.id === 'close-btn') {
            nav.classList.remove('active');
        }
    }

    return (
        <nav className='shadow' id='nav'>
            <Link to='/'><img src={logo} className='logo' alt='cara-store-logo' /></Link>
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
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li className='nav-li'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    <li id='nav-cart'>
                        <NavLink to='/cart'>
                            <i className='fa-solid fa-cart-shopping'></i>
                            <span className='badge rounded-pill bg-danger qty'>{cart.quantity}</span>
                        </NavLink>
                    </li>
                    {!user.currentUser && (
                        <>
                            <li className='auth-li'>
                                <Link to='/login' className='btn btn-success'>LOGIN</Link>
                            </li>
                            <li className='auth-li'>
                                <Link to='/register' className='btn btn-primary'>REGISTER</Link>
                            </li>
                        </>
                    )}
                    <i className='fa-regular fa-circle-xmark' id='close-btn' onClick={handleClick}></i>
                </ul>
            </div>
            <div id='menu-btn'>
                <NavLink to='/cart'>
                    <i className='fa-solid fa-cart-shopping'></i>
                    <span className='badge rounded-pill bg-danger qty'>{cart.quantity}</span>
                </NavLink>
                <i className='fa-solid fa-outdent' id='bar' onClick={handleClick}></i>
            </div>
        </nav>
    )
}

export default Navbar
