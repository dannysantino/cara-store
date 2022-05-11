import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getOrders } from '../redux/actions/orderActions'

const Order = () => {
    const { orderId } = useParams();
    const dispatch = useDispatch();
    const order = useSelector(state => state.orders.orders.find(e => e.id === orderId));

    useEffect(() => {
        !order && getOrders(dispatch);
    }, [order, dispatch]);

    return (
        <section className='wrapper' id='order'>
            <div className='row'>
                <header>
                    <h1>Order</h1>
                    <button><i className='fa-solid fa-ban'></i></button>
                </header>
                <div className='col-md-8 mb-3 mb-md-0'>
                    <div className='card shadow-sm'>
                        <div className='card-body'>
                            <h3 className='card-title'>Order Details</h3>
                            <div className='table-responsive'>
                                <table className='table table-striped table-hover align-middle'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Remove</th>
                                            <th scope='col'>Image</th>
                                            <th scope='col'>Product</th>
                                            <th scope='col'>Color</th>
                                            <th scope='col'>Size</th>
                                            <th scope='col'>Price</th>
                                            <th scope='col'>Quantity</th>
                                            <th scope='col'>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order && order.products.map((e, i) => (
                                                <tr key={i}>
                                                    <td>
                                                        <button>
                                                            <i className='fa-solid fa-xmark'></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <img src={e.img} alt={e.name} />
                                                    </td>
                                                    <td>
                                                        <Link to={`/product/${e.productId}`}>{e.name}</Link>
                                                    </td>
                                                    <td>
                                                        <span className='item-color' style={{ backgroundColor: e.color }} />
                                                    </td>
                                                    <td><b>{e.size}</b></td>
                                                    <td>${e.price}</td>
                                                    <td><b>{e.quantity}</b></td>
                                                    <td>${(e.price * e.quantity).toFixed(2)}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='card shadow-sm'>
                        <div className='card-body'>
                            <h3 className='card-title'>Order Summary</h3>
                            <div className='summary'>
                                <div className='item'>
                                    <span><b>Subtotal</b></span>
                                    <span>$ {order?.amount}</span>
                                </div>
                                <div className='item'>
                                    <span><b>Shipping</b></span>
                                    <span>$ 12</span>
                                </div>
                                <div className='item'>
                                    <span><b>Total</b></span>
                                    <span>$ <b>{(order?.amount + 12).toFixed(2)}</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Order
