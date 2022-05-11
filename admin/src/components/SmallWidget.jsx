import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { userRequest, setError } from '../utils/requestMethods'

const SmallWidget = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await userRequest.get('/users/admin/useraccounts?new=true');
                setUsers(data);
            } catch (err) {
                console.error(setError(err));
            }
        }
        getUsers();
    }, []);

    return (
        <div className='col-md-5 col-xl-4 mb-3 mb-md-0'>
            <div className='widget-sm card shadow-sm'>
                <div className='card-body px-sm-0'>
                    <h4 className='card-title px-3'>New Customers</h4>
                    <ul className='list-group list-group-flush px-sm-5 px-md-2 p-xxl-4 user-list'>
                        {
                            users && (
                                users.map(e => (
                                    <li className='list-group-item' key={e._id}>
                                        <img src={e.img} className='img-thumbnail' alt={e.name} />
                                        <div className='user text-center'>
                                            <span className='name'>{e.name}</span>
                                            <span className='role'>{e.role}</span>
                                        </div>
                                        <Link to={`/user/${e._id}`}>
                                            <i className='fa-solid fa-eye me-0 me-sm-2 me-md-0 me-xxl-2'></i>
                                            <span className='d-none d-sm-inline d-md-none d-xxl-inline'>Display</span>
                                        </Link>
                                    </li>
                                ))
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SmallWidget
