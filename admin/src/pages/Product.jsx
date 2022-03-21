import { Link } from 'react-router-dom'
import Chart from '../components/Chart'
import { productChartData } from '../demoData'

import '../stylesheets/Product.css'

const Product = () => {
    return (
        <section className='wrapper' id='product'>
            <div className='row'>
                <div className='col-12'>
                    <div className='wrapper'>
                        <header>
                            <h1>Edit Product</h1>
                            <Link to='/newproduct' className='btn'>Create New</Link>
                        </header>

                        <div className='row mb-5' id='chart'>
                            <Chart title='Sales Performance' data={productChartData} dataKey={'Sales'} span='col-9' />
                            <div className='col-3'>
                                <div className='card item shadow-sm'>
                                    <div className='card-body p-4'>
                                        <div className='details mb-3'>
                                            <img src='/img/products/f1.jpg' alt='' />
                                            <span className='name'>Luna Shirt - Multilcolored</span>
                                        </div>
                                        <div className='data'>
                                            <div className='info'>
                                                <span>id:</span>
                                                <span>1</span>
                                            </div>
                                            <div className='info'>
                                                <span>sales:</span>
                                                <span>2800</span>
                                            </div>
                                            <div className='info'>
                                                <span>active:</span>
                                                <span>yes</span>
                                            </div>
                                            <div className='info'>
                                                <span>in stock:</span>
                                                <span>yes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-5'>
                            <div className='col-12'>
                                <div className='card shadow-sm'>
                                    <div className='card-body product-update pt-4'>
                                        <h3 className='card-title'>Edit</h3>
                                        <form className='mt-4'>
                                            <div className='row'>
                                                <div className='col-7'>
                                                    <div className='wrapper ps-2'>
                                                        <div className='item-update'>
                                                            <label className='form-label'>Product Name</label>
                                                            <input type='text' className='form-control' placeholder='Luna Shirt - Multicolored' />
                                                        </div>
                                                        <div className='item-update'>
                                                            <label className='form-label'>In Stock</label>
                                                            <select name='stock' id='stock' className='form-select'>
                                                                <option value='yes'>Yes</option>
                                                                <option value='no'>No</option>
                                                            </select>
                                                        </div>
                                                        <div className='item-update'>
                                                            <label className='form-label'>Active</label>
                                                            <select name='Active' id='Active' className='form-select'>
                                                                <option value='yes'>Yes</option>
                                                                <option value='no'>No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-3 offset-1'>
                                                    <div className='upload'>
                                                        <div className='img-upload text-center'>
                                                            <img src='/img/products/f1.jpg' alt='luna-shirt - multicolored' />
                                                            <label htmlFor='upload'><i className='fa-solid fa-upload'></i></label>
                                                            <input type='file' className='d-none' id='upload' />
                                                        </div>
                                                        <button>UPDATE</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
