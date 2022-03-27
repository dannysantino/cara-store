import { Link, NavLink } from 'react-router-dom'

import '../stylesheets/Navbar.css'

const Navbar = () => {
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
            <Link to='/'><img src='/img/logo.png' className='logo' alt='cara-store-logo' /></Link>
            <div className='wrapper'>
                <ul id='navbar'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/shop/cat'
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li id='nav-cart'>
                        <NavLink
                            to='/cart'
                            className={({ isActive }) => (isActive ? 'active' : '')}>
                            <i className='fa-solid fa-cart-shopping'></i>
                        </NavLink>
                    </li>
                    <i className='fa-regular fa-circle-xmark' id='close-btn' onClick={handleClick}></i>
                </ul>
            </div>
            <div id='menu-btn'>
                <NavLink
                    to='/cart'
                    className={({ isActive }) => (isActive ? 'active' : '')}>
                    <i className='fa-solid fa-cart-shopping'></i>
                </NavLink>
                <i className='fa-solid fa-outdent' id='bar' onClick={handleClick}></i>
            </div>
        </nav>
    )
}

export default Navbar
