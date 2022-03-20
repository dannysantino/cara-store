import { Link, NavLink } from 'react-router-dom'

import '../stylesheets/Header.css'

const Navbar = () => {
    return (
        <header className='navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm px-4'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand'>dashmin</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav ms-auto'>
                        <NavLink to='notifications' className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                            <i className='fa-regular fa-bell'></i>
                            <span className='badge rounded-pill bg-danger'>8</span>
                        </NavLink>
                        <NavLink to='global' className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}><i className='fa-solid fa-globe'></i></NavLink>
                        <NavLink to='settings' className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}><i className='fa-solid fa-gear'></i></NavLink>
                        <NavLink to='user' className='nav-link'><img src='/img/users/1.png' alt='user-avatar' /></NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
