import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { cancelOrder, getOrders, updateOrder } from '../redux/actions/orderActions'
import { updateAlert } from '../utils/alerts'

import '../stylesheets/Order.css'

const Order = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const order = useSelector(state => state.orders.orders.find(e => e._id === orderId));

    const handleClick = () => {
        cancelOrder(dispatch, order._id)
            .then(() => navigate('/orders'))
            .catch(() => updateAlert('danger', '', 'Error cancelling order.'));
    }

    const handleStatus = () => {
        updateOrder(dispatch, order._id, { status: document.getElementById('status').value })
            .then(res => updateAlert('success', `${res}'s`, 'order has been successfully updated'))
            .catch(e => updateAlert('danger', '', e));
    }

    useEffect(() => {
        !order && getOrders(dispatch);
    }, [orderId, order, dispatch]);

    return (
        <section className='wrapper' id='order'>
            <div className='row mb-3 mb-lg-5'>
                {
                    order && (
                        <>
                            <header>
                                <h1 className='mb-0'>Order</h1>
                                <button
                                    className='btn btn-outline-secondary'
                                    onClick={handleClick}
                                    disabled={order.status === 'delivered'}
                                >
                                    CANCEL ORDER
                                    <i className='fa-solid fa-ban ms-2'></i>
                                </button>
                            </header>

                            <div className='wrapper'>
                                <div id='alert-box' className='d-inline-block'></div>
                            </div>

                            <div className='col-md-8 col-lg-12 col-xl-8 mb-3 mb-md-0 mb-lg-3 mb-xl-0'>
                                <div className='card shadow-sm'>
                                    <div className='card-body order-details'>
                                        <h3 className='card-title'>Order Details</h3>
                                        <div className='table-responsive'>
                                            <table className='table table-striped table-hover align-middle'>
                                                <thead>
                                                    <tr>
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
                                                        order && order.products.map(e => (
                                                            <tr key={e._id}>
                                                                <td>
                                                                    <img
                                                                        src={e.img}
                                                                        className='img-thumbnail'
                                                                        alt={e.name}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <Link to={`/product/${e._id}`}>{e.name}</Link>
                                                                </td>
                                                                <td>
                                                                    <span className='item-color' style={{ backgroundColor: e.color }} />
                                                                </td>
                                                                <td><b>{e.size}</b></td>
                                                                <td>$ {e.price}</td>
                                                                <td><b>{e.qty}</b></td>
                                                                <td>$ <b>{(e.price * e.qty).toFixed(2)}</b></td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4 col-lg-12 col-xl-4'>
                                <div className='card shadow-sm'>
                                    <div className='card-body'>
                                        <div className='order-id mb-4'>
                                            <h3 className='mb-3'>Order ID</h3>
                                            <h4 className='text-secondary'>{order._id}</h4>
                                        </div>
                                        <div className='delivery-details mb-3'>
                                            <h3 className='mb-3'>Delivery Details</h3>
                                            <h4 className='text-secondary'>Name</h4>
                                            <p>
                                                <Link to={`/user/${order.userId}`}>{order.name}</Link>
                                            </p>
                                            <h4 className='text-secondary'>Address</h4>
                                            <p className='mb-2'>
                                                {order.address['line1']}
                                            </p>
                                            <p>
                                                {order.address['city']}, {order.address['state']}&nbsp;
                                                {order.address['postal_code']} {order.address['country']}
                                            </p>
                                            <div className='status'>
                                                <h4 className='text-secondary mb-3'>Status</h4>
                                                <select
                                                    name='status'
                                                    id='status'
                                                    className='form-select me-3 mb-2'
                                                    defaultValue={order.status}
                                                >
                                                    <option value='pending'>Pending</option>
                                                    <option value='delivered'>Delivered</option>
                                                </select>
                                                <button
                                                    className='btn btn-primary mb-2'
                                                    onClick={handleStatus}
                                                >
                                                    UPDATE
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-sm-7 col-md-12 col-lg-6 col-xl-12 order-summary'>
                                            <h3 className='mb-3'>Order Summary</h3>
                                            <div className='summary'>
                                                <table width='100%'>
                                                    <tbody>
                                                        <tr>
                                                            <td className='pb-3'><b>Subtotal</b></td>
                                                            <td className='pb-3 text-end'>$ {(order.total - 12).toFixed(2)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='pb-3'><b>Shipping</b></td>
                                                            <td className='pb-3 text-end'>$ 12.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='pb-3'><b>Total</b></td>
                                                            <td className='pb-3 text-end'>$ <b>{order.total}</b></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </section>
    )
}

export default Order
