import Featured from '../components/Featured'

import '../stylesheets/Product.css'

const Product = () => {
    return (
        <>
            <section id='product' className='py-sm-5 my-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <div className='wrapper image'>
                                <img src='img/products/f1.jpg' alt='t-shirt' />
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 mt-4 mt-lg-0'>
                            <div className='wrapper details pt-3'>
                                <h6>Home / T-Shirt</h6>
                                <h4 className='my-4'>Men's Fashion T-Shirt</h4>
                                <h3 className='fw-bold'>$124.99</h3>
                                <select className='d-block p-2 mt-4 mb-3'>
                                    <option>Select size</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                    <option>Small</option>
                                    <option>Large</option>
                                </select>
                                <input type='number' value='1' />
                                <button className='base'>Add to Cart</button>
                                <h4 className='mt-5 mb-4'>Product Details</h4>
                                <p className='lead'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quis nulla eos fugit
                                    incidunt temporibus consequuntur modi impedit, expedita blanditiis officiis harum pariatur
                                    nisi quos, id at non culpa itaque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='related' className='products pt-3 my-5'>
                <div className='container-fluid'>
                    <h2>Related Items</h2>
                    <p>Browse through similar items</p>
                    <div className='row px-4 px-xl-5'>
                        <Featured context={'n'} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product
