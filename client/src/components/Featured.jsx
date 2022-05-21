import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addToCart } from '../redux/actions/cartActions'
import { userAlert } from '../utils/alerts'
import { publicRequest, setError } from '../utils/requestMethods'

import '../stylesheets/Featured.css'

const Featured = ({ index }) => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    const handleClick = product => {
        addToCart(dispatch, {
            ...product,
            color: product.color[0],
            size: product.size[0],
            qty: 1
        })
            .then(e => userAlert('info', 'Item added to your cart: ', e))
            .catch(() => userAlert('danger', 'An error occurred. Please try again', ''));
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await publicRequest.get('/products?new=true');
                setProducts(data);
            } catch (err) {
                console.error(setError(err));
            }
        }
        fetchProducts();
    }, []);

    return (
        <>
            {
                products.length && products.slice(index[0], index[1]).map(e => (
                    <div className='col-12 col-sm-6 col-lg-3' key={e._id}>
                        <div className='product'>
                            <Link to={`../product/${e._id}`}>
                                <img src={e.img} alt={e.name} />
                                <div className='desc'>
                                    <span>{e.categories.join(', ')}</span>
                                    <h5>{e.name}</h5>
                                    <div className='star'>
                                        {[...Array(5).keys()].map(e => <i className='fa-solid fa-star' key={e}></i>)}
                                    </div>
                                    <h4>${e.price}</h4>
                                </div>
                            </Link>
                            <button onClick={() => handleClick(e)} disabled={!e.countInStock}>
                                <i className='fa-solid fa-cart-plus cart-p'></i>
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Featured
