import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts, updateProduct } from '../redux/actions/productActions'
import { updateAlert } from '../utils/alerts'
import { userRequest } from '../utils/requestMethods'
import Chart from '../components/Chart'

import '../stylesheets/Product.css'

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});
    const [prodStats, setProdStats] = useState([]);

    const product = useSelector(state => state.products.products.find(e => e._id === id));

    const MONTHS = useMemo(() => [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ], []);

    const inputName = ['categories', 'size', 'color'];

    const handleInputs = e => {
        if (inputName.includes(e.target.name)) {
            setInputs(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value.split(', ')
            }));
        } else if (e.target.name === 'img') {
            setInputs(prevState => ({
                ...prevState,
                [e.target.name]: e.target.files[0]
            }));
        } else {
            setInputs(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }));
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!Object.keys(inputs).length) {
            e.stopPropagation();
            updateAlert('danger', '', 'No fields specified. Please edit at least one field to update');
        } else {
            const formData = new FormData();
            for (let k in inputs) {
                inputName.includes(k)
                    ? inputs[k].forEach(e => formData.append(k, e))
                    : formData.set(k, inputs[k])
            }

            updateProduct(dispatch, id, formData)
                .then(res => {
                    setInputs({});
                    updateAlert('success', res, 'has been successfully updated');
                })
                .catch(e => updateAlert('danger', '', e));
        }
    }

    useEffect(() => {
        !product && getProducts(dispatch);
    }, [product, dispatch]);

    useEffect(() => {
        const getStats = async () => {
            try {
                const { data } = await userRequest.get(`/orders/admin/income?id=${id}`);
                setProdStats(data.sort((a, b) => a._id - b._id).map(e => (
                    {
                        name: MONTHS[e._id - 1],
                        'Sales': e.total
                    }
                )));
            } catch (err) {
                console.error(err);
            }
        }
        getStats();
    }, [id, MONTHS]);

    return (
        <section className='wrapper' id='product'>
            <div className='row'>
                <div className='col-12'>
                    <div className='wrapper'>
                        <header>
                            <h1>Edit Product</h1>
                            <Link to='/newproduct' className='btn btn-success'>Create New</Link>
                        </header>
                        {
                            product && (
                                <>
                                    <div className='row mb-5' id='chart'>
                                        <Chart
                                            title='Sales Performance'
                                            data={prodStats}
                                            dataKey={'Sales'}
                                            span='col-md-8 col-xl-9 mb-3 mb-md-0'
                                        />
                                        <div className='col-md-4 col-xl-3'>
                                            <div className='card item shadow-sm'>
                                                <div className='card-body px-sm-5 pt-sm-4 px-md-3 pt-lg-3 p-xxl-4'>
                                                    <div className='details mb-3'>
                                                        <img
                                                            src={product.img}
                                                            className='img-thumbnail me-3'
                                                            alt={product.name}
                                                        />
                                                        <span className='name'>{product.name}</span>
                                                    </div>
                                                    <div className='data'>
                                                        <div className='info'>
                                                            <span>id:</span>
                                                            <span>{product._id}</span>
                                                        </div>
                                                        <div className='info'>
                                                            <span>price:</span>
                                                            <span>{product.price}</span>
                                                        </div>
                                                        <div className='info'>
                                                            <span>size(s):</span>
                                                            <span>{product.size.join(', ')}</span>
                                                        </div>
                                                        <div className='info'>
                                                            <span>sales:</span>
                                                            <span>${prodStats[0]?.Sales + prodStats[1]?.Sales || 0}</span>
                                                        </div>
                                                        <div className='info'>
                                                            <span>in stock:</span>
                                                            <span>{product.countInStock > 0 ? 'yes' : 'no'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row mb-3 mb-md-5'>
                                        <div className='col-12'>
                                            <div className='card shadow-sm'>
                                                <div className='card-body product-update pt-4'>
                                                    <h3 className='card-title'>Edit</h3>

                                                    <form
                                                        className='row mt-4'
                                                        encType='multipart/form-data'
                                                        onSubmit={handleSubmit}
                                                        noValidate
                                                    >
                                                        <div className='col-md-7 mb-4 mb-md-0'>
                                                            <div className='wrapper ps-2'>
                                                                <div id='alert-box' className='d-inline-block'></div>
                                                                <div className='item-update'>
                                                                    <label className='form-label'>Product Name</label>
                                                                    <input
                                                                        type='text'
                                                                        name='name'
                                                                        className='form-control'
                                                                        defaultValue={product.name}
                                                                        onChange={handleInputs}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className='item-update'>
                                                                    <label className='form-label'>Product Description</label>
                                                                    <input
                                                                        type='text'
                                                                        name='description'
                                                                        className='form-control'
                                                                        defaultValue={product.description}
                                                                        onChange={handleInputs}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className='item-update split'>
                                                                    <div className='left'>
                                                                        <label className='form-label'>Price</label>
                                                                        <input
                                                                            type='number'
                                                                            name='price'
                                                                            step='.01'
                                                                            className='form-control'
                                                                            defaultValue={product.price}
                                                                            onChange={handleInputs}
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='right'>
                                                                        <label className='form-label'>Count in stock</label>
                                                                        <input
                                                                            type='number'
                                                                            name='countInStock'
                                                                            className='form-control'
                                                                            defaultValue={product.countInStock}
                                                                            onChange={handleInputs}
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className='item-update'>
                                                                    <label className='form-label'>Categories</label>
                                                                    <span className='text-info'>Exact format: casual, business, women, men</span>
                                                                    <input
                                                                        type='text'
                                                                        name='categories'
                                                                        className='form-control'
                                                                        defaultValue={product.categories.join(', ')}
                                                                        onChange={handleInputs}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className='item-update split'>
                                                                    <div className='left'>
                                                                        <label className='form-label'>Size</label>
                                                                        <span className='text-info'>Exact format: XS, S, M, L, XL</span>
                                                                        <input
                                                                            type='text'
                                                                            name='size'
                                                                            className='form-control'
                                                                            defaultValue={product.size.join(', ')}
                                                                            onChange={handleInputs}
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='right'>
                                                                        <label className='form-label'>Color</label>
                                                                        <span className='text-info'>Exact format: red, yellow, blue</span>
                                                                        <input
                                                                            type='text'
                                                                            name='color'
                                                                            className='form-control'
                                                                            defaultValue={product.color.join(', ')}
                                                                            onChange={handleInputs}
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-5 col-xl-4 offset-xl-1'>
                                                            <div className='upload'>
                                                                <div className='img-upload mb-5 mb-md-0'>
                                                                    <img
                                                                        src={inputs.img ? URL.createObjectURL(inputs.img) : product.img}
                                                                        className='img-thumbnail'
                                                                        alt={inputs.img ? inputs.img.name : product.name}
                                                                    />
                                                                    <div className='d-inline-block text-center'>
                                                                        <label htmlFor='img'>
                                                                            <i className='fa-solid fa-upload fa-2x'></i>
                                                                        </label>
                                                                        <span className='d-block text-primary mt-3'>{inputs.img?.name}</span>
                                                                    </div>
                                                                    <input
                                                                        type='file'
                                                                        name='img'
                                                                        id='img'
                                                                        className='d-none'
                                                                        onChange={handleInputs}
                                                                    />
                                                                </div>
                                                                <button className='btn btn-primary'>UPDATE</button>
                                                            </div>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
