import { Link } from 'react-router-dom'

import importImages from '../utils/importImages'
import { useTitle } from '../utils/pageTitle'
import Featured from '../components/Featured'

import '../stylesheets/Home.css'

const Home = () => {
    useTitle('Cara Store | Home');

    const images = importImages(require.context('../assets/img/features', false, /\.png/));

    return (
        <>
            <section id='hero'>
                <div className='container-fluid'>
                    <div className='row px-2 px-lg-5'>
                        <div className='col'>
                            <div className='offer'>
                                <h4>Exclusive Offer</h4>
                                <h2>Super value deals</h2>
                                <h1>On all products</h1>
                                <p>Save more with coupons, up to 70% off!</p>
                                <Link to='../shop'>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='featured' className='my-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='fea-wrapper col-6 col-sm-4 col-lg-2'>
                            <div className='fea-box'>
                                <img src={images['f1.png']} alt='png-file' />
                                <h6>Free Shipping</h6>
                            </div>
                        </div>
                        <div className='fea-wrapper col-6 col-sm-4 col-lg-2'>
                            <div className='fea-box'>
                                <img src={images['f2.png']} alt='png-file' />
                                <h6>Order Online</h6>
                            </div>
                        </div>
                        <div className='fea-wrapper col-6 col-sm-4 col-lg-2'>
                            <div className='fea-box'>
                                <img src={images['f3.png']} alt='png-file' />
                                <h6>Save Money</h6>
                            </div>
                        </div>
                        <div className='fea-wrapper col-6 col-sm-4 col-lg-2'>
                            <div className='fea-box'>
                                <img src={images['f4.png']} alt='png-file' />
                                <h6>Promotions</h6>
                            </div>
                        </div>
                        <div className='fea-wrapper col-6 col-sm-4 col-lg-2'>
                            <div className='fea-box'>
                                <img src={images['f5.png']} alt='png-file' />
                                <h6>Happy Clients</h6>
                            </div>
                        </div>
                        <div className='fea-wrapper col-6 col-sm-4 col-lg-2'>
                            <div className='fea-box'>
                                <img src={images['f6.png']} alt='png-file' />
                                <h6>24/7 Support</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='fea-products' className='products pt-3 my-5'>
                <div className='container-fluid'>
                    <h2>Featured Products</h2>
                    <p>Updated Summer Collection</p>
                    <div className='row px-4 px-xl-5'>
                        <Featured index={[4, 8]} />
                    </div>
                </div>
            </section>

            <section id='banner' className='my-5'>
                <div className='container-fluid'>
                    <div className='row px-4 py-5'>
                        <div className='col-12'>
                            <div className='banner-wrapper text-center'>
                                <h4>Summer Sales</h4>
                                <h2>Up to <span>70% Off</span> - All T-Shirts and Accessories</h2>
                                <button className='base'>Explore More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='new-arrivals' className='products pt-3 my-5'>
                <div className='container-fluid'>
                    <h2>New Arrivals</h2>
                    <p>New and Exclusive Drops every Wednesday!</p>
                    <div className='row px-4 px-xl-5'>
                        <Featured index={[0, 4]} />
                    </div>
                </div>
            </section>

            <section id='explore' className='pt-3 mt-5 mb-3'>
                <div className='container-fluid'>
                    <div className='row px-4 px-xl-5'>
                        <div className='col-lg-6'>
                            <div className='banner-box px-4 px-sm-5 py-5'>
                                <h4>super deals</h4>
                                <h2>buy 2 get 1 free!</h2>
                                <span className='pb-3'>Check out our dresses on sale now!</span>
                                <button className='clear'>Learn More</button>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='banner-box spring px-4 px-sm-5 py-5'>
                                <h4>spring collection</h4>
                                <h2>upcoming season</h2>
                                <span className='pb-3'>Check out our dresses on sale now!</span>
                                <button className='clear'>Collection</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='sale' className='pt-3 my-3'>
                <div className='container-fluid'>
                    <div className='row px-4 px-xl-5'>
                        <div className='col-xl-4'>
                            <div className='banner-box p-4 p-sm-5'>
                                <h2>SEASONAL SALE</h2>
                                <h3>Winter Collection - 50% Off!</h3>
                            </div>
                        </div>
                        <div className='d-none d-xl-inline col-4'>
                            <div className='banner-box jacket p-5'>
                                <h2>NEW JACKET COLLECTION</h2>
                                <h3>Spring / Summer 2022</h3>
                            </div>
                        </div>
                        <div className='d-none d-xl-inline col-4'>
                            <div className='banner-box dresses p-5'>
                                <h2>DRESSES</h2>
                                <h3>New & Trendy Dresses</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
