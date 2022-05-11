import { NavLink } from 'react-router-dom'

import '../stylesheets/Sidebar.css'

const Sidebar = () => {
    return (
        <nav id='sidebar' className='navbar navbar-expand-lg pt-sm-4 pt-lg-0 px-sm-4 ps-lg-0 pe-lg-2 px-xxl-3 wrapper'>
            <NavLink to='#' className='d-lg-none sidebar-brand'>Sidebar</NavLink>
            <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#navbarOffcanvasLg'
                aria-controls='navbarOffcanvasLg'
            >
                <span className='navbar-toggler-icon'>
                    <i className='bi bi-box-arrow-in-up-right'></i>
                </span>
            </button>
            <div
                className='offcanvas offcanvas-end pt-3'
                tabIndex='-1'
                id='navbarOffcanvasLg'
                aria-labelledby='navbarOffcanvasLgLabel'
            >
                <div className='offcanvas-header'>
                    <button
                        className='btn-close text-reset'
                        data-bs-dismiss='offcanvas'
                        aria-label='Close'
                    >
                    </button>
                </div>
                <div className='offcanvas-body'>
                    <div className='menu mb-4'>
                        <h3>Dashboard</h3>
                        <ul className='nav nav-pills flex-column'>
                            <li>
                                <NavLink to='/' className='nav-link'>
                                    <i className='fa-solid fa-house-user'></i>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='analytics' className='nav-link'>
                                    <i className='fa-solid fa-chart-bar'></i>
                                    Analytics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='sales' className='nav-link'>
                                    <i className='fa-solid fa-arrow-trend-up'></i>
                                    Sales
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='menu mb-4'>
                        <h3>Quick Menu</h3>
                        <ul className='nav nav-pills flex-column'>
                            <li>
                                <NavLink to='users' className='nav-link'>
                                    <i className='fa-solid fa-users'></i>
                                    Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='products' className='nav-link'>
                                    <i className='fa-solid fa-store'></i>
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='orders' className='nav-link'>
                                    <i className='fa-solid fa-dollar-sign'></i>
                                    Orders
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='reports' className='nav-link'>
                                    <i className='fa-solid fa-chart-column'></i>
                                    Reports
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='menu mb-4'>
                        <h3>Notifications</h3>
                        <ul className='nav nav-pills flex-column'>
                            <li>
                                <NavLink to='mail' className='nav-link'>
                                    <i className='fa-solid fa-envelope-open-text'></i>
                                    Mail
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='feedback' className='nav-link'>
                                    <i className='fa-regular fa-thumbs-up'></i>
                                    Feedback
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='messages' className='nav-link'>
                                    <i className='fa-regular fa-message'></i>
                                    Messages
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='menu mb-4'>
                        <h3>Staff</h3>
                        <ul className='nav nav-pills flex-column'>
                            <li>
                                <NavLink to='staff/manage' className='nav-link'>
                                    <i className='fa-solid fa-briefcase'></i>
                                    Manage
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='staff/analytics' className='nav-link'>
                                    <i className='fa-solid fa-chart-bar'></i>
                                    Analytics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='staff/reports' className='nav-link'>
                                    <i className='fa-regular fa-file-lines'></i>
                                    Reports
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
