import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { userAlert } from '../utils/alerts'
import { useTitle } from '../utils/pageTitle'
import { setError, userRequest } from '../utils/requestMethods'
import Loader from '../components/Loader'

const Order = () => {
    useTitle('Your Order');

    const { id } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    const { user: { currentUser } } = useSelector(state => state);

    const [status, setStatus] = useState({ fetching: true, error: false, order: {} });

    const { fetching, error, order } = status;

    const styles = {
        section: {
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        wrapper: {
            border: '1px solid #e2e9e1'
        },
        h3: {
            fontSize: 'calc(.9rem + 1vw)',
            wordBreak: 'break-word'
        },
        font: {
            fontSize: 'calc(.6rem + .6vw)'
        },
        img: {
            width: '100px'
        },
        details: {
            margin: 'auto'
        },
        row: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        price: {
            fontSize: 'calc(.6rem + .6vw)',
            textAlign: 'end',
            minWidth: '35%',
            marginBottom: '0'
        },
        h5: {
            fontSize: '1rem',
            fontWeight: 'bold'
        },
        visa: {
            color: '#1434cb'
        },
        status: {
            fontSize: '14px',
            fontWeight: '500',
            padding: '.3rem .4rem'
        }
    }

    const getOrder = useCallback(async () => {
        if (!state) {
            try {
                const { data } = await userRequest.get(`/orders/${currentUser._id}/${id}`);
                return data;
            } catch (err) {
                console.error(err);
                throw new Error(setError(err), { cause: err });
            }
        } else {
            return state;
        }
    }, [state, currentUser._id, id]);

    useEffect(() => {
        getOrder()
            .then(res => setStatus({ fetching: false, error: false, order: res }))
            .catch(e => {
                if (e.cause?.response?.status === 403) {
                    userAlert('danger', e.cause.response.data, '');
                    navigate('/', { replace: true });
                } else {
                    setStatus({ fetching: false, error: true });
                }
            });
    }, [getOrder, navigate]);

    return (
        <section id='order' style={styles.section}>
            <div className='container'>
                <div className='row'>
                    {
                        fetching
                            ? <Loader />
                            : error
                                ? (
                                    <div className='col-md-8 offset-md-2'>
                                        <p className='lead text-danger text-center border p-4'>
                                            Error fetching order. Please reload the page
                                            <br />
                                            to try again or check your internet connection...
                                        </p>
                                    </div>
                                )
                                : (
                                    <>
                                        <div className='col-lg-8 offset-lg-2 my-4 my-md-5'>
                                            <div className='wrapper px-3 px-md-4 py-4 pt-md-5' style={styles.wrapper}>
                                                <h3 className='mb-3 fw-bold' style={styles.h3}>
                                                    Order ID: <span className='text-uppercase'>{order._id}</span>
                                                </h3>
                                                <div className='date' style={styles.font}>
                                                    <span className='text-secondary'>
                                                        Order date: <b>{new Date(order.createdAt).toDateString()}</b>
                                                    </span>
                                                    <span className='d-none d-md-inline mx-3'>|</span>
                                                    <span className='text-success d-block d-md-inline mt-2'>
                                                        <i className='fa-solid fa-plane-arrival'></i>
                                                        &nbsp;
                                                        {
                                                            order.status === 'pending'
                                                                ? <b>Estimated delivery: 1 - 2 business days</b>
                                                                : <b>Order delivered</b>
                                                        }
                                                    </span>
                                                </div>
                                                <hr />
                                                <div className='products my-4' style={styles.font}>
                                                    {order.products.map((e, i) => (
                                                        <div className='row px-xl-2 px-xxl-3 my-3' key={i}>
                                                            <div className='col-3 col-sm-2 text-start pe-0'>
                                                                <img
                                                                    src={e.img}
                                                                    alt={e.name}
                                                                    className='img-thumbnail'
                                                                    style={styles.img}
                                                                />
                                                            </div>
                                                            <div className='col-9 col-sm-10' style={styles.details}>
                                                                <div className='mb-1 mb-sm-2 mb-md-3' style={styles.row}>
                                                                    <p
                                                                        className='text-start mb-0'
                                                                        style={styles.font}
                                                                    >
                                                                        <b>{e.name}</b>
                                                                    </p>
                                                                    <p style={styles.price}>$ <b>{e.price}</b></p>
                                                                </div>
                                                                <div style={styles.row}>
                                                                    <span className='text-secondary'>
                                                                        {e.color} | {e.size}
                                                                    </span>
                                                                    <span className='text-secondary'>
                                                                        Qty: <b>{e.qty}</b>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <hr />
                                                <div className='row px-xl-2 px-xxl-3 my-4'>
                                                    <div className='col-sm-6 mb-4 mb-sm-0'>
                                                        <div className='wrapper'>
                                                            <h4 className='mb-3'>Payment</h4>
                                                            <h5 className='text-secondary' style={styles.h5}>
                                                                Payment method
                                                            </h5>
                                                            <p>
                                                                Card —
                                                                &nbsp;
                                                                <i
                                                                    className='fa-brands fa-cc-visa fa-xl'
                                                                    style={styles.visa}
                                                                >
                                                                </i>
                                                            </p>
                                                            <h5 className='text-secondary' style={styles.h5}>Status</h5>
                                                            <span
                                                                className='text-white bg-success rounded'
                                                                style={styles.status}
                                                            >
                                                                confirmed
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='col-sm-6 pt-3 pt-sm-0'>
                                                        <div className='wrapper'>
                                                            <h4 className='mb-3'>Delivery</h4>
                                                            <h5 className='text-secondary' style={styles.h5}>
                                                                Address
                                                            </h5>
                                                            <p className='mb-2'>
                                                                {order.address['line1']}
                                                            </p>
                                                            <p>
                                                                {order.address['city']}, {order.address['state']}&nbsp;
                                                                {order.address['postal_code']} {order.address['country']}
                                                            </p>
                                                            <h5 className='text-secondary' style={styles.h5}>
                                                                Status
                                                            </h5>
                                                            <span
                                                                className={`rounded ${order.status === 'pending'
                                                                    ? 'text-primary bg-warning'
                                                                    : 'text-white bg-success'}`}
                                                                style={styles.status}
                                                            >
                                                                {order.status}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='row px-xl-2 px-xxl-3 mt-4'>
                                                    <div className='col-sm-6 mb-4 mb-sm-0'>
                                                        <div className='wrapper'>
                                                            <h4 className='mb-3'>Need help?</h4>
                                                            <p>
                                                                <i className='fa-solid fa-clipboard-question fa-fw me-2'></i>
                                                                <Link to='#' className='text-decoration-none'>
                                                                    Order issues
                                                                </Link>
                                                            </p>
                                                            <p>
                                                                <i className='fa-solid fa-truck-fast fa-fw me-2'></i>
                                                                <Link to='#' className='text-decoration-none'>
                                                                    Delivery info
                                                                </Link>
                                                            </p>
                                                            <p>
                                                                <i className='fa-solid fa-hand-point-left fa-fw me-2'></i>
                                                                <Link to='#' className='text-decoration-none'>
                                                                    Return policy
                                                                </Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='col-sm-6'>
                                                        <div className='wrapper'>
                                                            <h4 className='mb-3'>Order Summary</h4>
                                                            <table width='100%'>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className='pb-3'>Subtotal</td>
                                                                        <td className='pb-3 text-end'>$ {(order.total - 12).toFixed(2)}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='pb-3'>Shipping</td>
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
            </div>
        </section>
    )
}

export default Order
