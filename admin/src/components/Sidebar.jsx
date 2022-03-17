import '../stylesheets/Sidebar.css'

const Sidebar = () => {
    return (
        <nav id='sidebar' className='wrapper px-3'>
            <div className='menu mb-4'>
                <h3>Dashboard</h3>
                <ul className='nav nav-pills flex-column'>
                    <li>
                        <a href='#' className='nav-link active'>
                            <i className='fa-solid fa-house-user'></i>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link'>
                            <i className='fa-solid fa-chart-bar'></i>
                            Analytics
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link'>
                            <i className='fa-solid fa-arrow-trend-up'></i>
                            Sales
                        </a>
                    </li>
                </ul>
            </div>

            <div className='menu mb-4'>
                <h3>Quick Menu</h3>
                <ul className='nav nav-pills flex-column'>
                    <li>
                        <a href='#' className='nav-link'>
                            <i className="fa-solid fa-users"></i>
                            Users
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link'>
                            <i className="fa-solid fa-store"></i>
                            Products
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link'>
                            <i className="fa-solid fa-dollar-sign"></i>
                            Transactions
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link'>
                            <i className="fa-solid fa-chart-column"></i>
                            Reports
                        </a>
                    </li>
                </ul>
            </div>
            <div className='menu mb-4'>
                <h3>Notifications</h3>
                <ul className='nav nav-pills flex-column'>
                    <li>
                        <a href='#' className='nav-link'>
                            <i className="fa-solid fa-envelope-open-text"></i>
                            Mail
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link'>
                            <i className="fa-regular fa-thumbs-up"></i>
                            Feedback
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link'>
                            <i className="fa-regular fa-message"></i>
                            Messages
                        </a>
                    </li>
                </ul>
            </div>
            <div className='menu mb-4'>
                <h3>Staff</h3>
                <ul className='nav nav-pills flex-column'>
                    <li>
                        <a href='#' className='nav-link'>
                            <i className="fa-solid fa-briefcase"></i>
                            Manage
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link'>
                            <i className='fa-solid fa-chart-bar'></i>
                            Analytics
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link'>
                            <i className="fa-regular fa-file-lines"></i>
                            Reports
                        </a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Sidebar
