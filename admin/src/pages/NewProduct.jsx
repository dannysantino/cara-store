import '../stylesheets/NewProduct.css'

const NewProduct = () => {
    return (
        <section className='wrapper' id='newproduct'>
            <div className='row'>
                <div className='col-md-11 mx-auto'>
                    <div className='wrapper'>
                        <header><h1>New Product</h1></header>
                        <form action='' className='row gx-5 gy-4'>
                            <div className='col-md-6 item-data'>
                                <label htmlFor='upload' className='form-label'>Image</label>
                                <input type='file' name='upload' id='upload' className='form-control form-control-lg' />
                            </div>
                            <div className='col-md-6 item-data'>
                                <label className='form-label'>Name</label>
                                <input type='text' className='form-control' placeholder='Luca Shirt - Multicolored' />
                            </div>
                            <div className='col-md-6 item-data'>
                                <label className='form-label'>Stock</label>
                                <input type='text' className='form-control' placeholder='12' />
                            </div>
                            <div className='col-md-6 item-data'>
                                <label className='form-label'>Active</label>
                                <select name='active' id='active' className='form-select'>
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

export default NewProduct
