import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addNewProduct } from '../redux/actions/productActions'
import { updateAlert } from '../utils/alerts'

import img1 from '../assets/img/defaults/img1.png'
import '../stylesheets/NewProduct.css'

const NewProduct = () => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});

    const inputName = ['categories', 'size', 'color'];

    const handleInputs = e => {
        if (inputName.includes(e.target.name)) {
            setInputs(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value.split(', ')
            }));
        } else if (e.target.name === 'img') {
            setInputs(prevState => ({
                ...prevState,
                [e.target.name]: e.target.files[0]
            }));
            let img = document.getElementById('upload');
            if (img.classList.contains('not-valid')) {
                img.classList.remove('not-valid');
                img.classList.add('valid');
            }
        } else {
            setInputs(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }));
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;

        if (!form.checkValidity()) {
            e.stopPropagation();
            !inputs.img
                && document.getElementById('upload').classList.add('not-valid');
            form.classList.add('was-validated');
        } else {
            const formData = new FormData();

            for (let k in inputs) {
                inputName.includes(k)
                    ? inputs[k].forEach(e => formData.append(k, e))
                    : formData.set(k, inputs[k])
            }

            addNewProduct(dispatch, formData)
                .then(res => {
                    setInputs({});
                    updateAlert('success', res, 'successfully added to shop');
                    Array.from(document.querySelectorAll('input')).forEach(e => e.value = '');
                })
                .catch(e => updateAlert('danger', '', e));
        }
    }

    return (
        <section className='wrapper' id='newproduct'>
            <header><h1>New Product</h1></header>
            <form
                className='row mb-3 mb-md-5'
                encType='multipart/form-data'
                onSubmit={handleSubmit}
                noValidate
            >
                <div className='col-md-7 mb-5 mb-md-0'>
                    <div className='row'>
                        <div id='alert-box' className='d-inline-block'></div>
                        <div className='col-12 mb-3 mb-lg-4 item-data'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                className='form-control form-control-lg'
                                onChange={handleInputs}
                                required
                            />
                        </div>
                        <div className='col-12 mb-3 mb-lg-4 item-data'>
                            <label htmlFor='desc' className='form-label'>Description</label>
                            <input
                                type='text'
                                name='description'
                                id='desc'
                                className='form-control form-control-lg'
                                onChange={handleInputs}
                                required
                            />
                        </div>
                        <div className='col-md-6 mb-3 mb-lg-4 item-data'>
                            <label htmlFor='price' className='form-label'>Price</label>
                            <input
                                type='number'
                                name='price'
                                id='price'
                                step='.01'
                                className='form-control form-control-lg'
                                onChange={handleInputs}
                                required
                            />
                        </div>
                        <div className='col-md-6 mb-3 mb-lg-4 item-data'>
                            <label htmlFor='stock' className='form-label'>Count in stock</label>
                            <input
                                type='number'
                                name='countInStock'
                                id='stock'
                                className='form-control form-control-lg'
                                onChange={handleInputs}
                                required
                            />
                        </div>
                        <div className='col-12 mb-3 mb-lg-4 item-data'>
                            <label htmlFor='categories' className='form-label'>Categories</label>
                            <input
                                type='text'
                                name='categories'
                                id='categories'
                                className='form-control form-control-lg'
                                placeholder='Format: casual, business, women'
                                onChange={handleInputs}
                                required
                            />
                        </div>
                        <div className='col-md-6 mb-3 mb-lg-4 item-data'>
                            <label htmlFor='size' className='form-label'>Size</label>
                            <input
                                type='text'
                                name='size'
                                id='size'
                                className='form-control form-control-lg'
                                placeholder='Format: XS, S, M, L, XL'
                                onChange={handleInputs}
                                required
                            />
                        </div>
                        <div className='col-md-6 mb-3 mb-lg-4 item-data'>
                            <label htmlFor='color' className='form-label'>Color</label>
                            <input
                                type='text'
                                name='color'
                                id='color'
                                className='form-control form-control-lg'
                                placeholder='Format: red, yellow, blue, green'
                                onChange={handleInputs}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className='col-md-4 offset-md-1'>
                    <div className='upload'>
                        <div className='img-upload mb-5 mb-md-0'>
                            <img
                                src={inputs.img ? URL.createObjectURL(inputs.img) : img1}
                                id='upload'
                                className='img-thumbnail'
                                alt={inputs.img?.name}
                            />
                            <div className='d-inline-block text-center'>
                                <label htmlFor='img'>
                                    <i className='fa-solid fa-upload fa-2x'></i>
                                </label>
                                <span className='d-block text-primary mt-3'>{inputs.img?.name}</span>
                            </div>
                            <input
                                type='file'
                                name='img'
                                id='img'
                                className='d-none'
                                onChange={handleInputs}
                                required
                            />
                        </div>
                        <button className='btn btn-primary'>CREATE</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default NewProduct
