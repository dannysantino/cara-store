import { NavLink } from 'react-router-dom'
import '../stylesheets/Sidebar.css'

const Sidebar = () => {
    return (
        <nav id='sidebar' className='wrapper px-3'>
            <div className='menu mb-4'>
                <h3>Dashboard</h3>
                <ul className='nav nav-pills flex-column'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
                            <i className='fa-solid fa-house-user'></i>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='analytics' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
                            <i className='fa-solid fa-chart-bar'></i>
                            Analytics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='sales' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
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
                        <NavLink to='users' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
                            <i className='fa-solid fa-users'></i>
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='products' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
                            <i className='fa-solid fa-store'></i>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='transactions' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
                            <i className='fa-solid fa-dollar-sign'></i>
                            Transactions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='reports' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
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
                        <NavLink to='mail' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
                            <i className='fa-solid fa-envelope-open-text'></i>
                            Mail
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='feedback' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
                            <i className='fa-regular fa-thumbs-up'></i>
                            Feedback
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='messages' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
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
                        <NavLink to='staff/manage' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
                            <i className='fa-solid fa-briefcase'></i>
                            Manage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='staff/analytics' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
                            <i className='fa-solid fa-chart-bar'></i>
                            Analytics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='staff/reports' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
                            <i className='fa-regular fa-file-lines'></i>
                            Reports
                        </NavLink>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Sidebar
