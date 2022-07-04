import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getUsers, updateUser } from '../redux/actions/usersActions'

import '../stylesheets/User.css'
import { updateAlert } from '../utils/alerts';

const User = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});

    const user = useSelector(state => state.users.users.find(e => e._id === userId));

    const handleInputs = e => {
        e.target.name === 'img'
            ? setInputs(prevState => ({
                ...prevState,
                [e.target.name]: e.target.files[0]
            }))
            : setInputs(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!Object.keys(inputs).length) {
            e.stopPropagation();
            updateAlert('danger', '', 'No fields specified. Please edit at least one field to update');
        } else {
            const formData = new FormData();
            for (let k in inputs) {
                formData.set(k, inputs[k]);
            }

            updateUser(dispatch, userId, formData)
                .then(res => {
                    setInputs({});
                    updateAlert('success', `${res}'s`, 'profile has been successfully updated');
                })
                .catch(e => updateAlert('danger', '', e));
        }
    }

    useEffect(() => {
        !user && getUsers(dispatch);
    }, [user, dispatch]);

    return (
        <section className='wrapper' id='user'>
            <div className='row mb-3 mb-lg-5'>
                <header>
                    <h1>Edit User</h1>
                    <button className='btn btn-success' disabled>Create New</button>
                </header>
                {
                    user && (
                        <>
                            <div className='col-md-4 mb-3 mb-md-0'>
                                <div className='card bio shadow-sm'>
                                    <div className='card-body pt-4 px-lg-2 px-xl-3'>
                                        <div className='user-details'>
                                            <img src={user.img} className='img-thumbnail' alt={user.name} />
                                            <div className='user'>
                                                <span className='name'>{user.name}</span>
                                                <span className='role'>{user.role}</span>
                                            </div>
                                        </div>
                                        <div className='account-details ps-2'>
                                            <h4>Profile</h4>
                                            <div className='info'>
                                                <i className='fa-solid fa-fingerprint'></i>
                                                <span className='bio-data'>{user._id}</span>
                                            </div>
                                            <div className='info'>
                                                <i className='fa-solid fa-user'></i>
                                                <span className='bio-data'>{user.username}</span>
                                            </div>
                                            <div className='info'>
                                                <i className='fa-solid fa-calendar-day'></i>
                                                <span className='bio-data'>{user.birthday || 'Not provided'}</span>
                                            </div>
                                            <h4>Contact Details</h4>
                                            <div className='info'>
                                                <i className='fa-solid fa-mobile'></i>
                                                <span className='bio-data'>{user.phone}</span>
                                            </div>
                                            <div className='info'>
                                                <i className='fa-solid fa-at'></i>
                                                <span className='bio-data'>{user.email}</span>
                                            </div>
                                            <div className='info'>
                                                <i className='fa-solid fa-location-dot'></i>
                                                <span className='bio-data'>{user.address || 'Not provided'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-8 mb-3 mb-md-0'>
                                <div className='card shadow-sm'>
                                    <div className='card-body user-update pt-4'>
                                        <h3 className='card-title'>Edit</h3>
                                        <form
                                            className='row mt-4'
                                            encType='multipart/form-data'
                                            onSubmit={handleSubmit}
                                        >
                                            <div className='col-sm-7 mb-5 mb-sm-0'>
                                                <div className='wrapper ps-2'>
                                                    <div id='alert-box' className='d-inline-block'></div>
                                                    <div className='bio-update'>
                                                        <label className='form-label'>Full Name</label>
                                                        <input
                                                            type='text'
                                                            name='name'
                                                            className='form-control'
                                                            defaultValue={user.name}
                                                            onChange={handleInputs}
                                                        />
                                                    </div>
                                                    <div className='bio-update'>
                                                        <label className='form-label'>Username</label>
                                                        <input
                                                            type='text'
                                                            name='username'
                                                            className='form-control'
                                                            defaultValue={user.username}
                                                            onChange={handleInputs}
                                                        />
                                                    </div>
                                                    <div className='bio-update'>
                                                        <label className='form-label'>Email</label>
                                                        <input
                                                            type='text'
                                                            name='email'
                                                            className='form-control'
                                                            defaultValue={user.email}
                                                            onChange={handleInputs}
                                                        />
                                                    </div>
                                                    <div className='bio-update'>
                                                        <label className='form-label'>Phone</label>
                                                        <input
                                                            type='text'
                                                            name='phone'
                                                            className='form-control'
                                                            defaultValue={user.phone}
                                                            onChange={handleInputs}
                                                        />
                                                    </div>
                                                    <div className='bio-update'>
                                                        <label htmlFor='' className='form-label'>Birthday</label>
                                                        <input
                                                            type='text'
                                                            name='birthday'
                                                            className='form-control'
                                                            defaultValue={user.birthday}
                                                            onChange={handleInputs}
                                                        />
                                                    </div>
                                                    <div className='bio-update'>
                                                        <label className='form-label'>Address</label>
                                                        <input
                                                            type='text'
                                                            name='address'
                                                            className='form-control'
                                                            defaultValue={user.address}
                                                            onChange={handleInputs}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-sm-5'>
                                                <div className='upload'>
                                                    <div className='img-upload mb-5 mb-sm-0'>
                                                        <img
                                                            src={inputs.img ? URL.createObjectURL(inputs.img) : user.img}
                                                            className='img-thumbnail'
                                                            alt={inputs.img ? inputs.img.name : user.name}
                                                        />
                                                        <div className='d-inline-block text-center'>
                                                            <label htmlFor='img'>
                                                                <i className='fa-solid fa-upload fa-xl'></i>
                                                            </label>
                                                            <span className='d-block text-primary mt-3'>{inputs.img?.name}</span>
                                                        </div>
                                                        <input
                                                            type='file'
                                                            name='img'
                                                            id='img'
                                                            className='d-none'
                                                            onChange={handleInputs}
                                                        />
                                                    </div>
                                                    <button className='btn btn-primary'>UPDATE</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
        </section>
    )
}

export default User
