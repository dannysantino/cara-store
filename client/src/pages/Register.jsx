import { Link } from 'react-router-dom'

import b16 from '../assets/img/banner/b16.jpg'
import '../stylesheets/Logister.css'

const Register = () => {
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
                        <div className='col-md-8 offset-md-2 my-4'>
                            <div className='card shadow'>
                                <img src={b16} className='card-img-top mb-2' alt='hand holding shopping bags' />
                                <div className='card-body'>
                                    <h3 className='card-title mb-3'>Create an account</h3>
                                    <form action='/register' method='post' className='row validate-form' onSubmit={handleValidation} noValidate>
                                        <div className='col-md-6 mb-3'>
                                            <label htmlFor='firstName' className='form-label'>First Name</label>
                                            <input type='text' id='firstName' className='form-control' name='firstName' autoFocus required />
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <label htmlFor='lastName' className='form-label'>Last Name</label>
                                            <input type='text' id='lastName' className='form-control' name='lastName' required />
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <label htmlFor='username' className='form-label'>Username</label>
                                            <input type='text' id='username' className='form-control' name='username' required />
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <label htmlFor='email' className='form-label'>Email</label>
                                            <input type='text' id='email' className='form-control' name='email' required />
                                        </div>
                                        <div className='col-md-6 mb-3 mb-md-0'>
                                            <label htmlFor='password' className='form-label'>Password</label>
                                            <input type='password' id='password' className='form-control' name='password' required />
                                        </div>
                                        <div className='col-md-6 mb-5 mb-md-0'>
                                            <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label>
                                            <input type='password' id='confirmPassword' className='form-control' name='confirmPassword' required />
                                        </div>
                                        <div className='col mt-md-5'>
                                            <button type='submit' className='btn btn-success w-100'>CREATE</button>
                                        </div>
                                    </form>
                                    <div className='mt-4'>
                                        <p className='mb-1'>Already have an account? <Link to='/login'>Log in</Link></p>
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

export default Register
