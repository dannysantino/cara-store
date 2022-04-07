import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

import a6 from '../assets/img/about/a6.jpg'
import importImages from '../utils/importImages'
import { userRequest } from '../utils/requestMethods'

import '../stylesheets/Cart.css'

const Cart = () => {
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = token => setStripeToken(token);
    const STRIPE_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

    const images = importImages(require.context('../assets/img/products', false, /\.jpg/));

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
    }, [stripeToken, cart.total, navigate])

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
                            <section id='cart' className='py-5 mt-5'>
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
                                                    {cart.products.map((e, i) => (
                                                        <tr key={i}>
                                                            <td>
                                                                <button>
                                                                    <i className='fa-regular fa-circle-xmark'></i>
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <img src={images[e.img]} alt={e.name} />
                                                            </td>
                                                            <td>
                                                                <Link to={`../product/${e._id}`}>{e.name}</Link>
                                                            </td>
                                                            <td>
                                                                <span className='item-color' style={{ backgroundColor: e.color }} />
                                                            </td>
                                                            <td><b>{e.size}</b></td>
                                                            <td>${e.price}</td>
                                                            <td>
                                                                <select className='form-select qty' defaultValue={e.qty}>
                                                                    {[...Array(e.countInStock).keys()].map(n => (
                                                                        <option value={n + 1} key={n + 1}>{n + 1}</option>
                                                                    ))}
                                                                </select>
                                                            </td>
                                                            <td>${(e.price * e.qty).toFixed(2)}</td>
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
