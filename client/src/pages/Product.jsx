import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import importImages from '../utils/importImages'
import { publicRequest } from '../utils/requestMethods'
import { addProduct } from '../redux/cartRedux'
import Featured from '../components/Featured'

import '../stylesheets/Product.css'

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [product, setProduct] = useState({});

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');

    const img = importImages(require.context('../assets/img/products', false, /\.jpg/));

    const handleClick = () => {
        dispatch(addProduct({ ...product, qty, size, color }));
    }

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await publicRequest.get(`/products/${id}`);
                setProduct(data);
            } catch (err) {
                console.error(err);
            }
        }
        getProduct();
    }, [id]);

    return (
        <>
            <section id='product' className='py-sm-5 my-5'>
                <div className='container'>
                    <div className='row'>
                        {
                            !Object.keys(product).length
                                ? <h3>Fetching product. Please, wait...</h3>
                                : (
                                    <>
                                        <div className='col-12 col-lg-6'>
                                            <div className='wrapper image'>
                                                <img src={img[product.img]} alt={product.name} />
                                            </div>
                                        </div>

                                        <div className='col-12 col-lg-6 mt-4 mt-lg-0'>
                                            <div className='wrapper details pt-3'>
                                                <h6>{product.categories.join(', ')}</h6>
                                                <h4 className='my-4'>{product.name}</h4>
                                                <h3 className='fw-bold'>${product.price}</h3>
                                                <div className='my-3 row'>
                                                    <div className='color col-3'>
                                                        <span className='fw-bold me-3'>Color:</span>
                                                        {product.color.map(e => (
                                                            <span
                                                                key={e}
                                                                style={{ backgroundColor: e }}
                                                                className='item-color'
                                                                onClick={() => setColor(e)}></span>
                                                        ))}
                                                    </div>
                                                    <div className='col-4'>
                                                        <select className='form-select p-2 size' onChange={e => setSize(e.target.value)}>
                                                            <option>Select size</option>
                                                            {product.size.map(e => <option value={e} key={e}>{e}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <select value={qty} className='form-select qty' onChange={e => setQty(Number(e.target.value))}>
                                                        {[...Array(product.countInStock).keys()].map(e => (
                                                            <option value={e + 1} key={e + 1}>{e + 1}</option>
                                                        ))}
                                                    </select>
                                                    <button className='base' onClick={handleClick}>Add to Cart</button>
                                                </div>

                                                <h4 className='mt-5 mb-4'>Product Details</h4>
                                                <p className='lead'>
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )
                        }
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
