import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { verifyToken } from '../utils/requestMethods'
import { login, logout } from '../redux/actions/userActions'
import { userAlert } from '../utils/alerts'

import a5 from '../assets/img/about/a5.jpg'
import '../stylesheets/Logister.css'

const Login = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const path = useRef(state ? state.from.pathname : '/');
    const isVerified = useRef(verifyToken());
    const [error, setError] = useState('');

    const { loading, currentUser } = useSelector(state => state.user);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
        } else {
            const inputs = {};
            Array.from(document.querySelectorAll('input')).forEach(e => inputs[e.name] = e.value);
            login(dispatch, inputs)
                .then(res => {
                    localStorage.setItem('userToken', res.token);
                    userAlert('success', 'Welcome, ', res.user);
                    isVerified.current = true;
                })
                .catch(e => setError(e.message));
        }
    }

    useEffect(() => {
        if (currentUser && isVerified.current) {
            state?.from?.search &&
                (path.current = state.from.pathname + state.from.search);
            navigate(path.current, { replace: true });
        } else if (state && state.errorMessage && !error) {
            logout(dispatch);
            setError(state.errorMessage);
        }
    }, [currentUser, state, navigate, error, dispatch]);

    return (
        <>
            {
                !currentUser && (
                    <section id='logister'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6 offset-md-3 col-xl-4 offset-xl-4 my-4'>
                                    <div className='card shadow'>
                                        <img
                                            src={a5}
                                            className='card-img-top login-img'
                                            alt='illustration of woman thinking about shopping'
                                        />
                                        <div className='card-body'>
                                            <h3 className='card-title'>Log in</h3>
                                            <form
                                                className='validate-form'
                                                onSubmit={handleSubmit}
                                                noValidate
                                            >
                                                {error && <span className='text-danger d-inline-block mb-3'>{error}</span>}
                                                <div className='mb-3'>
                                                    <label htmlFor='username' className='form-label'>Username</label>
                                                    <input
                                                        type='text'
                                                        id='username'
                                                        className='form-control'
                                                        name='username'
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                                <div className='mb-4'>
                                                    <label htmlFor='password' className='form-label'>Password</label>
                                                    <input
                                                        type='password'
                                                        id='password'
                                                        className='form-control'
                                                        name='password'
                                                        required
                                                    />
                                                </div>
                                                <div className='col'>
                                                    <button
                                                        type='submit'
                                                        className='btn btn-success w-100'
                                                        disabled={loading}
                                                    >
                                                        LOGIN
                                                    </button>
                                                </div>
                                            </form>
                                            <div className='mt-4'>
                                                <p className='mb-1'>
                                                    Don't have an account?
                                                    <button
                                                        className='register ms-2'
                                                        onClick={() => navigate('/register', state && { state: state })}
                                                    >
                                                        Register
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

export default Login
