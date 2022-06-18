import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../redux/actions/userActions'
import { userAlert } from '../utils/alerts'
import { publicRequest, setError, verifyToken } from '../utils/requestMethods'

import b16 from '../assets/img/banner/b16.jpg'
import '../stylesheets/Logister.css'

const Register = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const path = useRef(state ? state.from.pathname : '/');
    const [status, setStatus] = useState({ loading: false, error: '' });

    const { currentUser } = useSelector(state => state.user);

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
        } else {
            const inputs = {};
            setStatus({ loading: true, error: '' });
            Array.from(document.querySelectorAll('input')).forEach(e => inputs[e.name] = e.value);

            if (inputs.password !== inputs.confirmPassword) {
                setStatus({
                    loading: false,
                    error: 'Passwords do not match! Please ensure that both passwords match...'
                });
            } else {
                try {
                    await publicRequest.post('/auth/register', inputs);
                    login(dispatch, { username: inputs.username, password: inputs.password })
                        .then(res => {
                            localStorage.setItem('userToken', res.token);
                            userAlert('success', 'Your account has been successfully created, ', `${res.user}!`);
                            setStatus({ loading: false, error: '' });
                        })
                        .catch(e => {
                            console.error(e.message);
                            setStatus({ loading: false, error: '' });
                            userAlert('info', 'An error occurred. Please enter your details to log in', '');
                            navigate('/login', state && { state: state });
                        });
                } catch (err) {
                    err.response && err.response.status >= 500
                        ? setStatus({ loading: false, error: 'Internal server error' })
                        : setStatus({ loading: false, error: setError(err) });
                }
            }
        }
    }

    useEffect(() => {
        if (currentUser && verifyToken()) {
            state?.from?.search &&
                (path.current = state.from.pathname + state.from.search);
            navigate(path.current, { replace: true });
        }
    }, [currentUser, state, navigate]);

    return (
        <>
            {
                !currentUser && (
                    <section id='logister'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 offset-md-2 my-4'>
                                    <div className='card shadow'>
                                        <img
                                            src={b16}
                                            className='card-img-top mb-2'
                                            alt='hand holding shopping bags'
                                        />
                                        <div className='card-body'>
                                            <h3 className='card-title mb-3'>Create an account</h3>
                                            <form
                                                className='row validate-form'
                                                onSubmit={handleSubmit}
                                                noValidate
                                            >
                                                {status.error && <span className='text-danger d-inline-block mb-3'>{status.error}</span>}
                                                <div className='col-md-6 mb-3'>
                                                    <label htmlFor='name' className='form-label'>Full Name</label>
                                                    <input
                                                        type='text'
                                                        id='name'
                                                        className='form-control'
                                                        name='name'
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                                <div className='col-md-6 mb-3'>
                                                    <label htmlFor='phone' className='form-label'>Phone</label>
                                                    <input
                                                        type='text'
                                                        id='phone'
                                                        className='form-control'
                                                        name='phone'
                                                        required
                                                    />
                                                </div>
                                                <div className='col-md-6 mb-3'>
                                                    <label htmlFor='username' className='form-label'>Username</label>
                                                    <input
                                                        type='text'
                                                        id='username'
                                                        className='form-control'
                                                        name='username'
                                                        required
                                                    />
                                                </div>
                                                <div className='col-md-6 mb-3'>
                                                    <label htmlFor='email' className='form-label'>Email</label>
                                                    <input
                                                        type='text'
                                                        id='email'
                                                        className='form-control'
                                                        name='email'
                                                        required
                                                    />
                                                </div>
                                                <div className='col-md-6 mb-3 mb-md-0'>
                                                    <label htmlFor='password' className='form-label'>Password</label>
                                                    <input
                                                        type='password'
                                                        id='password'
                                                        className='form-control'
                                                        name='password'
                                                        required
                                                    />
                                                </div>
                                                <div className='col-md-6 mb-5 mb-md-0'>
                                                    <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label>
                                                    <input
                                                        type='password'
                                                        id='confirmPassword'
                                                        className='form-control'
                                                        name='confirmPassword'
                                                        required
                                                    />
                                                </div>
                                                <div className='col mt-md-5'>
                                                    <button
                                                        type='submit'
                                                        className='btn btn-success w-100'
                                                        disabled={status.loading}
                                                    >
                                                        CREATE
                                                    </button>
                                                </div>
                                            </form>
                                            <div className='mt-4'>
                                                <p className='mb-1'>
                                                    Already have an account?
                                                    <button
                                                        className='login ms-2'
                                                        onClick={() => navigate('/login', state && { state: state })}
                                                    >
                                                        {status.loading &&
                                                            <span
                                                                className='spinner-border spinner-border-sm me-3'
                                                                role='status'
                                                                aria-hidden='true'
                                                            />
                                                        }
                                                        Log in
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
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

export default Register
