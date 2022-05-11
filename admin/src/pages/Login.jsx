import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { verifyToken } from '../utils/requestMethods'
import { login } from '../redux/actions/adminActions'
import { logout } from '../redux/reducers/adminReducers'

const Login = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const path = useRef(-1);
    const isVerified = useRef(verifyToken());
    const [error, setError] = useState('');

    const { fetching, adminUser } = useSelector(state => state.admin);

    const styles = {
        height: 'calc(100vh - 74px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '74px'
    }

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
                    if (res.isAdmin === true) {
                        isVerified.current = true;
                        localStorage.setItem('adminToken', res.token);
                    }
                })
                .catch(e => setError(e.message));
        }
    }

    useEffect(() => {
        if (adminUser && isVerified.current) {
            state && (path.current = state.from.pathname);
            navigate(path.current, { replace: true });
        } else if (state && state.errorMessage && !error) {
            dispatch(logout());
            setError(state.errorMessage);
        }
    }, [adminUser, state, navigate, error, dispatch]);

    return (
        <>
            {
                (!adminUser || !isVerified.current) && (
                    <section id='login' style={styles}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6 offset-md-3 col-xl-4 offset-xl-4 my-4'>
                                    <div className='card shadow'>
                                        <div className='card-body'>
                                            <h3 className='card-title'>Log in</h3>
                                            <form
                                                onSubmit={handleSubmit}
                                                noValidate
                                            >
                                                {error && <span className='text-danger d-inline-block my-3'>{error}</span>}
                                                <div className='mb-3'>
                                                    <label htmlFor='username' className='form-label'>Username</label>
                                                    <input
                                                        type='text'
                                                        name='username'
                                                        id='username'
                                                        className='form-control'
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                                <div className='mb-5'>
                                                    <label htmlFor='password' className='form-label'>Password</label>
                                                    <input
                                                        type='password'
                                                        name='password'
                                                        id='password'
                                                        className='form-control'
                                                        required
                                                    />
                                                </div>
                                                <div className='col'>
                                                    <button
                                                        type='submit'
                                                        className='btn btn-success w-100'
                                                        disabled={fetching}
                                                    >
                                                        LOGIN
                                                    </button>
                                                </div>
                                            </form>
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
