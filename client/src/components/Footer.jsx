import '../stylesheets/Footer.css'

const Footer = () => {
    return (
        <footer id='footer' className='pt-5 mt-5'>
            <div className='container-fluid'>
                <div className='row px-4 px-xl-5'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='contact'>
                            <img src='img/logo.png' className='mb-4' alt='logo' />
                            <h4>Contact</h4>
                            <address><strong>Address:</strong>
                                <span>1101, Shrewsbury Road, Baker's Street, Chicago, IL</span>
                            </address>
                            <p><strong>Phone:</strong> 1-800-SHOP-CARA / 1-800-SUPPORT-CARA</p>
                            <p><strong>Hours:</strong> 09:00 - 18:00, Mon - Fri</p>
                            <div className='socials pt-3 mt-4'>
                                <h4>Follow us</h4>
                                <div className='icons'>
                                    <i className='fa-brands fa-facebook-f'></i>
                                    <i className='fa-brands fa-twitter'></i>
                                    <i className='fa-brands fa-instagram'></i>
                                    <i className='fa-brands fa-pinterest-p'></i>
                                    <i className='fa-brands fa-youtube'></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-6 col-md-3 col-lg-2 mt-5 mt-md-0'>
                        <div className='about'>
                            <h4>About</h4>
                            <ul className='list-unstyled plain-anchor'>
                                <li><a href='#'>About us</a></li>
                                <li><a href='#'>Delivery Information</a></li>
                                <li><a href='#'>Terms & Conditions</a></li>
                                <li><a href='#'>Privacy Policy</a></li>
                                <li><a href='#'>Contact us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-6 col-md-3 col-lg-2 mt-5 mt-md-0'>
                        <div className='account'>
                            <h4>My Account</h4>
                            <ul className='list-unstyled plain-anchor'>
                                <li><a href='#'>Sign In</a></li>
                                <li><a href='#'>View Cart</a></li>
                                <li><a href='#'>My Wishlist</a></li>
                                <li><a href='#'>Track My Order</a></li>
                                <li><a href='#'>Help</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-8 col-lg-4 mt-5 mt-lg-0'>
                        <div className='app'>
                            <h4>Install App</h4>
                            <p>From App Store or Google Pay</p>
                            <div className='my-3'>
                                <img src='img/pay/app.jpg' alt='apple-store' />
                                <img src='img/pay/play.jpg' alt='app-store' />
                            </div>
                            <p>Secure Payment Gateways</p>
                            <img src='img/pay/pay.png' alt='payment-gateway ' />
                        </div>
                    </div>
                </div>

                <div className='row px-4 mt-5'>
                    <div className='col-12 col-sm-6 offset-sm-3'>
                        <div className='copyright text-center'>
                            <p>Copyright &copy; 2022 | <a href="http://dannysantino.com" target='_blank'>Danny Santino</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
