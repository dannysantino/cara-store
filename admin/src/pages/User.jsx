import { Link } from 'react-router-dom'

import '../stylesheets/User.css'

const User = () => {
    return (
        <div className='wrapper' id='user'>
            <div className='row'>
                <div className='col-12'>
                    <div className='wrapper'>
                        <header>
                            <h1>Edit User</h1>
                            <Link to='newuser' className='btn'>Create</Link>
                        </header>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='card bio shadow-sm'>
                                    <div className='card-body pt-4'>
                                        <div className='user-details'>
                                            <img src='/img/users/3.png' alt='user-avatar' />
                                            <div className='user'>
                                                <span className='name'>Liz Bennington</span>
                                                <span className='job-title'>Administrator</span>
                                            </div>
                                        </div>
                                        <div className='account-details'>
                                            <h4>Account Details</h4>
                                            <div className='info'>
                                                <i className='fa-solid fa-user'></i>
                                                <span className='bio-data'>msbenny</span>
                                            </div>
                                            <div className='info'>
                                                <i className='fa-solid fa-calendar-day'></i>
                                                <span className='bio-data'>23 - 08 - 1987</span>
                                            </div>
                                            <h4>Contact Details</h4>
                                            <div className='info'>
                                                <i className='fa-solid fa-mobile'></i>
                                                <span className='bio-data'>+1 (202) 555-0249</span>
                                            </div>
                                            <div className='info'>
                                                <i className='fa-solid fa-at'></i>
                                                <span className='bio-data'>msbenny@mail.com</span>
                                            </div>
                                            <div className='info'>
                                                <i className='fa-solid fa-location-dot'></i>
                                                <span className='bio-data'>Sentinel Boulevard - 8859, Pascale, CA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-8'>
                                <div className='card shadow-sm'>
                                    <div className='card-body user-update pt-4'>
                                        <h3>Edit</h3>
                                        <form action='' className='mt-4'>
                                            <div className='row'>
                                                <div className='col-7'>
                                                    <div className='wrapper ps-2'>
                                                        <div className='bio-update'>
                                                            <label className='form-label'>Username</label>
                                                            <input type='text' className='form-control' placeholder='msbenny' />
                                                        </div>
                                                        <div className='bio-update'>
                                                            <label className='form-label'>Full Name</label>
                                                            <input type='text' className='form-control' placeholder='Liz Bennington' />
                                                        </div>
                                                        <div className='bio-update'>
                                                            <label className='form-label'>Email</label>
                                                            <input type='text' className='form-control' placeholder='msbenny@mail.com' />
                                                        </div>
                                                        <div className='bio-update'>
                                                            <label className='form-label'>Phone</label>
                                                            <input type='text' className='form-control' placeholder='+1 (202) 555-0249' />
                                                        </div>
                                                        <div className='bio-update'>
                                                            <label className='form-label'>Address</label>
                                                            <input type='text' className='form-control' placeholder='Sentinel Boulevard - 8859, Pascale, CA' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='offset-1 col-3'>
                                                    <div className='wrapper upload'>
                                                        <div className='img-upload text-center'>
                                                            <img src='/img/users/3.png' alt='user-avatar' />
                                                            <label htmlFor='upload'><i className='fa-solid fa-upload'></i></label>
                                                            <input type='file' className='d-none' id='upload' />
                                                        </div>
                                                        <button>UPDATE</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
