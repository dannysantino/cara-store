import '../stylesheets/Newsletter.css'

const Newsletter = () => {
    return (
        <section id='newsletter' className='py-5 my-5'>
            <div className='container-fluid'>
                <div className='row px-4 px-xl-5'>
                    <div className='col-12 col-lg-7'>
                        <div className='signup'>
                            <h4>Sign up for our newsletter</h4>
                            <p>Get all the latest updates on new drops and collections, plus <span>special offers.</span>
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-9 col-lg-5 mt-3 mt-lg-0'>
                        <div className='form'>
                            <input type='text' placeholder='Enter email' />
                            <button className='base'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
