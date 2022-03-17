import '../stylesheets/Header.css'

const Navbar = () => {
    return (
        <header className='navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm px-4'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>dashmin</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav ms-auto'>
                        <a className='nav-link' aria-current='page' href='#'>
                            <i className='fa-regular fa-bell'></i>
                            <span className="badge rounded-pill bg-danger">8</span>
                        </a>
                        <a className='nav-link' href='#'><i className='fa-solid fa-globe'></i></a>
                        <a className='nav-link' href='#'><i className='fa-solid fa-gear'></i></a>
                        <a className='nav-link' href='#'><img src='img/users/1.png' alt='user-avatar' /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
