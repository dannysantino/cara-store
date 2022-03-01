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
        <nav id='nav' className='p-4 px-lg-5'>
            <a href='#'><img src='img/logo.png' className='logo' alt='cara-store-logo' /></a>
            <div>
                <ul id='navbar'>
                    <li><a href='#' className='active'>Home</a></li>
                    <li><a href='shop.html'>Shop</a></li>
                    <li><a href='blog.html'>Blog</a></li>
                    <li><a href='about.html'>About</a></li>
                    <li><a href='contact.html'>Contact</a></li>
                    <li id='nav-cart'><a href='cart.html'><i className='fa-solid fa-cart-shopping'></i></a></li>
                    <i className='fa-regular fa-circle-xmark' id='close-btn' onClick={handleClick}></i>
                </ul>
            </div>
            <div id='menu-btn'>
                <a href='cart.html'><i className='fa-solid fa-cart-shopping'></i></a>
                <i className='fa-solid fa-outdent' id='bar' onClick={handleClick}></i>
            </div>
        </nav>
    )
}

export default Navbar
