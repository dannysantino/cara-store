import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { updateUser } from '../redux/reducers/userReducers'
import { userAlert } from '../utils/alerts'
import { setError, userRequest } from '../utils/requestMethods'

import '../stylesheets/Profile.css'
import { logout } from '../redux/actions/userActions'

const Profile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        _id,
        name,
        username,
        email,
        img,
        phone,
        address,
        birthday,
        role
    } = useSelector(state => state.user.currentUser);

    const [inputs, setInputs] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState({ update: false, delete: false });
    const [status, setStatus] = useState({ error: false, orders: [] });

    const handleInputs = e => {
        e.target.name === 'img'
            ? setInputs(prevState => ({
                ...prevState,
                [e.target.name]: e.target.files[0]
            }))
            : setInputs(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }));
    }

    const handleUpdate = async () => {
        setLoading({ update: true, delete: false });
        const formData = new FormData();
        for (let k in inputs)
            formData.set(k, inputs[k]);
        try {
            const { data } = await userRequest.put(`/users/update/${_id}`, formData);
            setInputs({});
            dispatch(updateUser(data));
            setLoading({ update: false, delete: false });
            userAlert('success', 'Your profile has been successfully updated, ', name);
        } catch (err) {
            console.error(setError(err));
            setLoading({ update: false, delete: false });
            userAlert('danger', 'An error occurred. Please try again...', '');
        }
    }

    const handleDelete = async e => {
        e.preventDefault();
        e.stopPropagation();
        setLoading({ update: false, delete: true });
        try {
            await userRequest.delete(`/users/${_id}`);
            setLoading({ update: false, delete: false });
            userAlert('danger', 'Your account has been deleted! Sorry to see you go.', '');
            logout(dispatch);
        } catch (err) {
            console.error(setError(err));
            setLoading({ update: false, delete: false });
            userAlert('danger', 'Error completing action. Please try again...', '');
        }
    }

    const getOrders = useCallback(async () => {
        try {
            const { data } = await userRequest.get(`/orders/${_id}`);
            return data;
        } catch (err) {
            console.error(err);
            throw new Error(setError(err), { cause: err });
        }
    }, [_id]);

    useEffect(() => {
        if (id !== _id) {
            userAlert('danger', 'Access denied! Unauthorised user', '');
            navigate('/');
        } else {
            getOrders()
                .then(res => setStatus({ error: false, orders: res.reverse() }))
                .catch(e => {
                    console.error(e);
                    setStatus({ error: true });
                    if (e.message === 'No orders found for this user!') {
                        setErrorMessage('You have not placed any orders yet.');
                    }
                });
        }
    }, [id, _id, navigate, getOrders]);

    return (
        <>
            {
                id === _id && (
                    <>
                        <section id='profile-header' className='page-header'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='wrapper text-center'>
                                            <h2>#profile</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className='img-name'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-10 offset-xl-1'>
                                        <div className='wrapper'>
                                            <img
                                                src={inputs.img ? URL.createObjectURL(inputs.img) : img}
                                                alt={inputs.img ? inputs.img.name : name}
                                                className='img-thumbnail'
                                            />
                                            <label htmlFor='img'>
                                                <i className='fa-solid fa-pencil'></i>
                                            </label>
                                            <input
                                                type='file'
                                                name='img'
                                                id='img'
                                                className='d-none'
                                                onChange={handleInputs}
                                            />
                                            <div className='name pt-4 ms-4'>
                                                <h5>{name}</h5>
                                                <span className='text-secondary'>{role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section id='profile'>
                            <div className='container'>
                                <div className='row mb-3 mb-md-5'>
                                    <div className='col-md-7 offset-xl-1'>
                                        <div className='wrapper'>
                                            <span className='text-secondary'>MY ACCOUNT</span>
                                            <h3>Personal Info</h3>
                                            <form
                                                className='row gx-4 gy-3 gy-lg-4 ps-sm-3'
                                            >
                                                <div className='col-12 user-info mb-3'>
                                                    <label htmlFor='name'>
                                                        <i className='fa-solid fa-id-card fa-2x fa-fw me-4'></i>
                                                    </label>
                                                    <input
                                                        type='text'
                                                        name='name'
                                                        id='name'
                                                        defaultValue={name}
                                                        onChange={handleInputs}
                                                    />
                                                </div>
                                                <div className='col-12 user-info mb-3'>
                                                    <label htmlFor='email'>
                                                        <i className='fa-solid fa-envelope-open-text fa-2x fa-fw me-4'></i>
                                                    </label>
                                                    <input
                                                        type='text'
                                                        name='email'
                                                        id='email'
                                                        defaultValue={email}
                                                        onChange={handleInputs}
                                                    />
                                                </div>
                                                <div className='col-sm-6 col-md-12 col-lg-6 user-info mb-3'>
                                                    <label htmlFor='username'>
                                                        <i className='fa-solid fa-user-tag fa-2x fa-fw me-4'></i>
                                                    </label>
                                                    <input
                                                        type='text'
                                                        name='username'
                                                        id='username'
                                                        defaultValue={username}
                                                        onChange={handleInputs}
                                                    />
                                                </div>
                                                <div className='col-sm-6 col-md-12 col-lg-6 user-info mb-3'>
                                                    <label htmlFor='password'>
                                                        <i className='fa-solid fa-unlock-keyhole fa-2x fa-fw me-4'></i>
                                                    </label>
                                                    <input
                                                        type='password'
                                                        name='password'
                                                        id='password'
                                                        defaultValue='****************'
                                                        onChange={handleInputs}
                                                    />
                                                </div>
                                                <div className='col-sm-6 col-md-12 col-lg-6 user-info mb-3'>
                                                    <label htmlFor='phone'>
                                                        <i className='fa-solid fa-mobile fa-2x fa-fw me-4'></i>
                                                    </label>
                                                    <input
                                                        type='text'
                                                        name='phone'
                                                        id='phone'
                                                        defaultValue={phone}
                                                        onChange={handleInputs}
                                                    />
                                                </div>
                                                <div className='col-sm-6 col-md-12 col-lg-6 user-info mb-3'>
                                                    <label htmlFor='birthday'>
                                                        <i className='fa-solid fa-cake-candles fa-2x fa-fw me-4'></i>
                                                    </label>
                                                    <input
                                                        type='date'
                                                        name='birthday'
                                                        id='birthday'
                                                        defaultValue={birthday || 'Add birthday'}
                                                        onChange={handleInputs}
                                                    />
                                                </div>
                                                <div className='col-12 user-info mb-3'>
                                                    <label htmlFor='address'>
                                                        <i className='fa-solid fa-location-dot fa-2x fa-fw me-4'></i>
                                                    </label>
                                                    <input
                                                        type='text'
                                                        name='address'
                                                        id='address'
                                                        defaultValue={address || 'Add your address'}
                                                        onChange={handleInputs}
                                                    />
                                                </div>
                                                <div className='update mt-4 mt-md-5'>
                                                    <button
                                                        className='base update'
                                                        onClick={handleUpdate}
                                                        disabled={loading.update || !Object.keys(inputs).length}
                                                    >
                                                        {loading.update
                                                            ? <span
                                                                className='spinner-border spinner-border-sm me-2'
                                                                role='status'
                                                                aria-hidden='true'
                                                            />
                                                            : <i className='fa-solid fa-pen-to-square me-2'></i>
                                                        }
                                                        UPDATE
                                                    </button>
                                                    <button
                                                        className='btn btn-danger delete'
                                                        type='button'
                                                        data-bs-toggle='modal'
                                                        data-bs-target='#deleteModal'
                                                        disabled={loading.delete}
                                                    >
                                                        {loading.delete
                                                            ? <span
                                                                className='spinner-border spinner-border-sm'
                                                                role='status'
                                                                aria-hidden='true'
                                                            />
                                                            : <i className='fa-solid fa-trash-can'></i>
                                                        }
                                                    </button>
                                                    <div
                                                        className='modal fade'
                                                        id='deleteModal'
                                                        tabIndex='-1'
                                                        aria-labelledby='modalLabel'
                                                        aria-hidden='true'
                                                    >
                                                        <div className='modal-dialog modal-dialog-centered'>
                                                            <div className='modal-content'>
                                                                <div className='modal-header'>
                                                                    <h5 className='modal-title' id='modalLabel'>
                                                                        Delete your account
                                                                    </h5>
                                                                    <button
                                                                        className='btn-close'
                                                                        type='button'
                                                                        data-bs-dismiss='modal'
                                                                        aria-label='Close'
                                                                    />
                                                                </div>
                                                                <div className='modal-body'>
                                                                    <p className='mb-0'>
                                                                        Are you sure you want to delete your account?
                                                                        <br />
                                                                        This action cannot be undone!
                                                                    </p>
                                                                </div>
                                                                <div className='modal-footer'>
                                                                    <button
                                                                        className='btn btn-danger'
                                                                        data-bs-dismiss='modal'
                                                                        onClick={handleDelete}
                                                                    >
                                                                        DELETE MY ACCOUNT!
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className='col-md-5 col-xl-4'>
                                        <div className='wrapper'>
                                            <h3>Order History</h3>
                                            {
                                                status.error && !errorMessage
                                                    ? (
                                                        <h4 className='text-danger'>
                                                            An error occurred. Please reload the
                                                            page or check your internet connection...
                                                        </h4>
                                                    )
                                                    : errorMessage
                                                        ? (
                                                            <p className='lead'>
                                                                {errorMessage}&nbsp;
                                                                Click <Link to='/shop'>here</Link> to start shopping...
                                                            </p>
                                                        )
                                                        : (
                                                            <div className='list-group list-group-flush orders'>
                                                                {status.orders.map(e => (
                                                                    <Link
                                                                        to={`/order/${e._id}`}
                                                                        key={e._id}
                                                                        className='list-group-item list-group-item-action order px-md-2 px-lg-3 py-3'
                                                                    >
                                                                        <h4>{(e._id).toUpperCase()}</h4>
                                                                        <div className='date-status'>
                                                                            <span>{new Date(e.createdAt).toDateString()}</span>
                                                                            <span
                                                                                className={`rounded ${e.status === 'pending'
                                                                                    ? 'text-white pending'
                                                                                    : 'text-white delivered'}`}
                                                                            >
                                                                                {e.status}
                                                                            </span>
                                                                        </div>
                                                                        <div className='qty-total'>
                                                                            <span>
                                                                                <b>Items</b>: {e.products.length}
                                                                            </span>
                                                                            <span>$ <b>{e.total}</b></span>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )
                                            }
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

export default Profile
