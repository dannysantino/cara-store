import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { clearCart } from '../redux/reducers/cartReducers'
import { userAlert } from '../utils/alerts'
import { useTitle } from '../utils/pageTitle'
import { placeNewOrder } from '../utils/placeNewOrder'
import Loader from '../components/Loader'

import banner from '../assets/img/about/banner.png'

const Success = () => {
    useTitle('Order Confirmation');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const { user: { currentUser } } = useSelector(state => state);

    const [errorMessage, setErrorMessage] = useState('');
    const [status, setStatus] = useState({ placing: true, error: false, order: {} });

    const handleClick = () => {
        navigate(`/order/${status.order._id}`, { state: status.order });
    }

    const styles = {
        section: {
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        wrapper: {
            border: '1px solid #e2e9e1',
            backgroundColor: '#fff'
        },
        checkMark: {
            color: 'green'
        },
        profileLink: {
            marginLeft: '.2rem',
            textDecoration: 'none'
        }
    }

    useEffect(() => {
        if (!searchParams.has('session_id')) {
            navigate('/', { replace: true });
        } else {
            placeNewOrder(searchParams.get('session_id'))
                .then(res => {
                    dispatch(clearCart());
                    setStatus({ placing: false, error: false, order: res });
                })
                .catch(e => {
                    console.error(e);
                    setStatus({ placing: false, error: true });
                    if (e.message === 'Duplicate Error!') {
                        setErrorMessage(
                            'Your order has already been placed! Please visit your profile page to view the details.'
                        );
                    } else if (e.cause?.response?.status === 401 || e.cause?.response?.status === 403) {
                        userAlert('danger', e.cause.response.data, '');
                        navigate('/', { replace: true });
                    }
                });
        }
    }, [searchParams, navigate, dispatch]);

    return (
        <>
            {
                searchParams.has('session_id') && currentUser && (
                    <section id='success' style={styles.section}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 offset-md-2 my-4'>
                                    <div className='wrapper text-center p-4' style={styles.wrapper}>
                                        {
                                            status.placing
                                                ? (
                                                    <>
                                                        <Loader />
                                                        <p className='lead mt-4'>
                                                            Please wait while we confirm your order...
                                                        </p>
                                                    </>
                                                )
                                                : status.error && !errorMessage
                                                    ? <p className='lead text-danger'>
                                                        Error placing order. Please reload the page to try again...
                                                    </p>
                                                    : (
                                                        <>
                                                            <div className='checkmark mb-3'>
                                                                <i
                                                                    className='fa-solid fa-circle-check fa-4x'
                                                                    style={styles.checkMark}
                                                                >
                                                                </i>
                                                            </div>
                                                            <h4 className='text-success mb-4'>Payment successful!</h4>
                                                            {
                                                                errorMessage
                                                                    ? <p className='lead'>{errorMessage}</p>
                                                                    : (
                                                                        <>
                                                                            <p>
                                                                                Thank you for shopping with us,
                                                                                <Link
                                                                                    to={`/profile/${currentUser._id}`}
                                                                                    style={styles.profileLink}
                                                                                >
                                                                                    {currentUser.name}!&nbsp;
                                                                                </Link>
                                                                                Your order has been placed.
                                                                                <br />
                                                                                You will receive confirmation via email shortly&nbsp;
                                                                                with the expected delivery details for your item(s).
                                                                            </p>
                                                                            <div className='mt-4 mb-3'>
                                                                                <Link
                                                                                    to='/shop'
                                                                                    className='btn btn-outline-secondary mb-3 mb-sm-0 me-sm-3'
                                                                                >
                                                                                    CONTINUE SHOPPING
                                                                                </Link>
                                                                                <button
                                                                                    className='btn btn-primary'
                                                                                    onClick={handleClick}
                                                                                >
                                                                                    VIEW ORDER
                                                                                </button>
                                                                            </div>
                                                                        </>
                                                                    )
                                                            }
                                                        </>
                                                    )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default Success
