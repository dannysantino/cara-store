import '../stylesheets/NewUser.css'

const NewUser = () => {
    return (
        <section className='wrapper' id='newuser'>
            <div className='row'>
                <div className='col-md-11 mx-auto'>
                    <div className='wrapper'>
                        <header>
                            <h1>New User</h1>
                        </header>
                        <form className='row gx-5 gy-4'>
                            <div className='col-md-6 user-data'>
                                <label className='form-label'>Username</label>
                                <input type='text' className='form-control' placeholder='msbenny' />
                            </div>
                            <div className='col-md-6 user-data'>
                                <label className='form-label'>Full Name</label>
                                <input type='text' className='form-control' placeholder='Liz Bennington' />
                            </div>
                            <div className='col-md-6 user-data'>
                                <label className='form-label'>Email</label>
                                <input type='text' className='form-control' placeholder='msbenny@mail.com' />
                            </div>
                            <div className='col-md-6 user-data'>
                                <label className='form-label'>Password</label>
                                <input type='password' className='form-control' placeholder='Password' />
                            </div>
                            <div className='col-md-6 user-data'>
                                <label className='form-label'>Phone</label>
                                <input type='text' className='form-control' placeholder='+1 (202) 555-0249' />
                            </div>
                            <div className='col-md-6 user-data'>
                                <label className='form-label'>Address</label>
                                <input type='text' className='form-control' placeholder='Sentinel Boulevard - 8859, Pascale, CA' />
                            </div>
                            <div className='col-md-6 user-data gender'>
                                <label className='form-label d-block mb-3'>Gender</label>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' className='form-check-input' name='gender' id='male' value='male' />
                                    <label htmlFor='male' className='form-check-label'>Male</label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' className='form-check-input' name='gender' id='female' value='female' />
                                    <label htmlFor='female' className='form-check-label'>Female</label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' className='form-check-input' name='gender' id='other' value='other' defaultChecked />
                                    <label htmlFor='other' className='form-check-label'>Other</label>
                                </div>
                            </div>
                            <div className='col-md-6 user-data'>
                                <label htmlFor='active' className='form-label'>Active</label>
                                <select name='active' className='form-select' id='active'>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div className='col-md-6'>
                                <button>Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewUser
