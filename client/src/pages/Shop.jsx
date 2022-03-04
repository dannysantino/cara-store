import Pagination from '../components/Pagination'

import '../stylesheets/Shop.css'

const Shop = () => {
    return (
        <>
            <section id='shop-header' className='page-header'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className='wrapper text-center'>
                                <h2>#stayhome</h2>
                                <p>Browse our extensive catalog of hottest fashion trends!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='products' className='py-5 my-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className='heading text-center'>
                                <h2>Featured Items</h2>
                                <hr />
                            </div>
                        </div>
                    </div>

                    <div className='products pt-5'>
                        <div className='row px-4 px-xl-5'>
                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/f1.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/f2.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/f3.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/f4.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/f5.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/f6.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/f7.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/f8.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/n1.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/n2.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/n3.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/n4.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/n5.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/n6.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/n7.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='product'>
                                    <img src='img/products/n8.jpg' alt='t-shirt' />
                                    <div className='desc'>
                                        <span>hermes</span>
                                        <h5>T-Shirt - Flowery Design</h5>
                                        <div className='star'>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <h4>$127.99</h4>
                                    </div>
                                    <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Pagination />
        </>
    )
}

export default Shop
