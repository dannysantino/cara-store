import { Link } from 'react-router-dom'

import '../stylesheets/Logister.css'

const Login = () => {
    const handleValidation = e => {
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        form.classList.add('was-validated');
    }

    return (
        <>
            <section id='logister'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3 col-xl-4 offset-xl-4 my-4'>
                            <div className='card shadow'>
                                <img src='/img/about/a5.jpg' className='card-img-top login-img' alt='illustration of woman thinking about shopping' />
                                <div className='card-body'>
                                    <h3 className='card-title'>Log in</h3>
                                    <form action='/login' method='post' className='validate-form' onSubmit={handleValidation} noValidate>
                                        <div className='mb-3'>
                                            <label htmlFor='username' className='form-label'>Username</label>
                                            <input type='text' id='username' className='form-control' name='username' autoFocus required />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor='password' className='form-label'>Password</label>
                                            <input type='password' id='password' className='form-control' name='password' required />
                                        </div>
                                        <div className='col'>
                                            <button type='submit' className='btn btn-success w-100'>LOGIN</button>
                                        </div>
                                    </form>
                                    <div className='mt-4'>
                                        <p className='mb-1'>Don't have an account? <Link to='/register'>Register</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
