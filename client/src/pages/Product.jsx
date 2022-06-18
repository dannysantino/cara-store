import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '../redux/actions/cartActions'
import { updateAlert } from '../utils/alerts'
import { publicRequest } from '../utils/requestMethods'
import Loader from '../components/Loader'
import Featured from '../components/Featured'

import '../stylesheets/Product.css'

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const foundProduct = useSelector(state => state.products.products.find(e => e._id === id));

    const [selections, setSelections] = useState({});
    const [product, setProduct] = useState({});
    const [fetchState, setFetchState] = useState({ loading: true, error: false, });

    const handleSelections = e => {
        const name = e.target.classList.contains('item-color')
            ? 'color'
            : e.target.name;
        setSelections(prevState => ({
            ...prevState,
            [name]: name === 'color'
                ? e.target.style.backgroundColor
                : name === 'qty'
                    ? Number(e.target.value)
                    : e.target.value
        }));
    }

    const handleClick = () => {
        addToCart(dispatch, { ...product, ...selections })
            .then(e => updateAlert('success', e, ' has been added to your cart'))
            .catch(() => updateAlert('danger', '', 'An error occurred. Please try again'));
    }

    useEffect(() => {
        const getProduct = async () => {
            if (!foundProduct) {
                try {
                    const { data } = await publicRequest.get(`/products/${id}`);
                    return data;
                } catch (err) {
                    console.error(err);
                    throw new Error();
                }
            } else {
                return foundProduct;
            }
        }

        getProduct()
            .then(res => {
                setProduct(res);
                setFetchState({ loading: false, error: false });
                setSelections({ color: res.color[0], size: res.size[0], qty: 1 });
            })
            .catch(() => setFetchState({ loading: false, error: true }));
    }, [foundProduct, id]);

    return (
        <>
            <section id='product' className='py-lg-5 my-5'>
                <div className='container'>
                    <div className='row'>
                        {
                            fetchState.loading
                                ? <Loader />
                                : fetchState.error
                                    ? <h4 className='text-danger text-center'>
                                        An error occurred. Please reload the
                                        <br />
                                        page or check your internet connection...
                                    </h4>
                                    : (
                                        <>
                                            <div className='col-lg-6'>
                                                <div className='wrapper image'>
                                                    <img src={product.img} alt={product.name} />
                                                </div>
                                            </div>

                                            <div className='col-lg-6 mt-4 mt-lg-0'>
                                                <div className='wrapper details pt-3'>
                                                    <h6>
                                                        {product.categories.map(e => (
                                                            <Link
                                                                to={`../shop?category=${e}`}
                                                                key={e}
                                                                className='text-decoration-none me-3'
                                                            >
                                                                {e}
                                                            </Link>
                                                        ))}
                                                    </h6>
                                                    <h4 className='my-4'>{product.name}</h4>
                                                    <h3 className='fw-bold'>${product.price}</h3>
                                                    <div className='color-size'>
                                                        <div className='color me-3'>
                                                            <span className='fw-bold'>Color:</span>
                                                            {product.color.map(e => (
                                                                <button
                                                                    key={e}
                                                                    style={{ backgroundColor: e }}
                                                                    className='item-color ms-2'
                                                                    onClick={handleSelections}
                                                                >
                                                                </button>
                                                            ))}
                                                        </div>
                                                        <div className='size'>
                                                            <select
                                                                name='size'
                                                                className='form-select'
                                                                onChange={handleSelections}
                                                            >
                                                                {product.size.map(e => <option value={e} key={e}>{e}</option>)}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='d-inline-block mt-2' id='update-alert'></div>
                                                    {!product.countInStock &&
                                                        <span className='text-danger'>Out of stock</span>
                                                    }
                                                    <div className='add-to-cart'>
                                                        <select
                                                            name='qty'
                                                            value={selections.qty}
                                                            className='form-select qty'
                                                            onChange={handleSelections}
                                                        >
                                                            {[...Array(product.countInStock).keys()].map(e => (
                                                                <option value={e + 1} key={e + 1}>{e + 1}</option>
                                                            ))}
                                                        </select>
                                                        <button
                                                            className='base'
                                                            onClick={handleClick}
                                                            disabled={!product.countInStock}
                                                        >
                                                            Add to Cart
                                                        </button>
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
                        <Featured index={[4, 8]} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product
