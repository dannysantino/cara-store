import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

import { removeFromCart, updateCartItem } from '../redux/actions/cartActions'
import { clearCart } from '../redux/reducers/cartReducers'
import { userAlert } from '../utils/alerts'
import { userRequest } from '../utils/requestMethods'

import a6 from '../assets/img/about/a6.jpg'
import '../stylesheets/Cart.css'

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const [products, setProducts] = useState([]);
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = token => setStripeToken(token);
    const STRIPE_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

    const handleRemove = product => {
        removeFromCart(dispatch, product)
            .then(e => userAlert('info', 'Item removed from your cart: ', e))
            .catch(() => userAlert('danger', 'An error occurred. Please try again', ''));
    }

    const handleQty = item => {
        updateCartItem(dispatch, item)
            .then(e => userAlert('info', 'Cart item updated: ', e))
            .catch(() => userAlert('danger', 'An error occurred. Please try again', ''));
    }

    useEffect(() => {
        const payRequest = async () => {
            try {
                const res = await userRequest.post('/checkout/pay', {
                    tokenId: stripeToken.id,
                    amount: Number(((cart.total + 12) * 100).toFixed(0))
                });
                navigate('/success', { state: res.data });
            } catch (err) {
                console.error(err);
            }
        }
        stripeToken && payRequest();
    }, [stripeToken, cart.total, navigate]);

    useEffect(() => {
        setProducts(cart.products);
    }, [cart.products]);

    return (
        <>
            <section id='cart-header' className='page-header'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className='wrapper text-center'>
                                <h2>#cart</h2>
                                <p>Add a coupon code and save up to 45%!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
                !cart.products.length
                    ? (
                        <section id='empty-cart' className='py-5 mt-5'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-10 offset-1'>
                                        <div className='wrapper text-center'>
                                            <i className='fa-solid fa-cart-shopping fa-5x fa-shake mb-4'></i>
                                            <h3>Your cart is empty!</h3>
                                            <Link to='../shop'>Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                    : (
                        <>
                            <section id='cart' className='py-5 mt-md-5'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <table width='100%'>
                                                <thead>
                                                    <tr>
                                                        <td>Remove</td>
                                                        <td>Image</td>
                                                        <td>Product</td>
                                                        <td>Color</td>
                                                        <td>Size</td>
                                                        <td>Price</td>
                                                        <td>Quantity</td>
                                                        <td>Subtotal</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {products.map((p, i) => (
                                                        <tr key={i}>
                                                            <td>
                                                                <button onClick={() => handleRemove({ ...p, index: i })}>
                                                                    <i className='fa-regular fa-circle-xmark'></i>
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <img src={p.img} alt={p.name} />
                                                            </td>
                                                            <td>
                                                                <Link to={`../product/${p._id}`}>{p.name}</Link>
                                                            </td>
                                                            <td>
                                                                <span className='item-color' style={{ backgroundColor: p.color }} />
                                                            </td>
                                                            <td><b>{p.size}</b></td>
                                                            <td>${p.price}</td>
                                                            <td>
                                                                <select
                                                                    className='form-select qty'
                                                                    value={p.qty}
                                                                    onChange={e => handleQty({ ...p, index: i, qty: e.target.value })}
                                                                >
                                                                    {[...Array(p.countInStock).keys()].map(n => (
                                                                        <option value={n + 1} key={n + 1}>{n + 1}</option>
                                                                    ))}
                                                                </select>
                                                            </td>
                                                            <td>${(p.price * p.qty).toFixed(2)}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id='summary'>
                                <div className='container'>
                                    <div className='row px-sm-4'>
                                        <div className='col-12 col-md-6'>
                                            <div id='coupon' className='pt-md-4 mb-4'>
                                                <h4 className='mb-3'>Apply Coupon</h4>
                                                <div className='form'>
                                                    <p>Enter your coupon if you have one</p>
                                                    <input type='text' placeholder='Coupon code' />
                                                    <button className='base'>Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <div id='subtotal' className='p-4 mb-4'>
                                                <h4 className='mb-3'>Cart Total</h4>
                                                <table className='mb-4'>
                                                    <tbody>
                                                        <tr>
                                                            <td>Cart Subtotal</td>
                                                            <td>$ {(cart.total).toFixed(2)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shipping</td>
                                                            <td>$ 12</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Total</b></td>
                                                            <td><b>$ {(cart.total + 12).toFixed(2)}</b></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className='cart-actions'>
                                                    <StripeCheckout
                                                        name='Cara Online Store'
                                                        image={a6}
                                                        description='The one-stop shop for all your fashion needs!'
                                                        amount={Number(((cart.total + 12) * 100).toFixed(0))}
                                                        currency='USD'
                                                        stripeKey={STRIPE_KEY}
                                                        shippingAddress
                                                        token={onToken}
                                                    >
                                                        <button className='base'>Proceed to checkout</button>
                                                    </StripeCheckout>
                                                    <button
                                                        className='btn btn-danger clear-cart'
                                                        onClick={() => dispatch(clearCart())}
                                                    >
                                                        CLEAR CART
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
            }
        </>
    )
}

export default Cart
