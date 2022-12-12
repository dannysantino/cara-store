import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'timeago.js'

import { getOrders } from '../redux/actions/orderActions'
import { getUsers } from '../redux/actions/usersActions'

const LargeWidget = () => {
    const dispatch = useDispatch();
    const { orders: { orders }, users: { users } } = useSelector(state => state);

    useEffect(() => {
        !users.length && getUsers(dispatch);
        !orders.length && getOrders(dispatch);
    }, [users, orders, dispatch]);

    const Button = ({ type }) => <button className={type.toLowerCase()}>{type}</button>;

    return (
        <div className='col-md-7 col-xl-8'>
            <div className='card widget-lg shadow-sm'>
                <div className='card-body p-xxl-4'>
                    <h4 className='card-title'>Latest Transactions</h4>
                    <div className='table-responsive'>
                        <table className='table table-striped table-hover align-middle'>
                            <thead>
                                <tr>
                                    <th scope='col'>Customer</th>
                                    <th scope='col'>Date</th>
                                    <th scope='col'>Amount</th>
                                    <th scope='col'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.length && users.length
                                        ? orders.slice(-6).reverse().map(e => (
                                            <tr key={e._id}>
                                                <td>
                                                    <img
                                                        src={users.find(u => u._id === e.userId).img}
                                                        className='img-thumbnail'
                                                        alt='user-avatar'
                                                    />
                                                    <Link to={`/order/${e._id}`}>
                                                        <span className='name'>{e.name}</span>
                                                    </Link>
                                                </td>
                                                <td>{format(e.createdAt)}</td>
                                                <td>$ <b>{e.total}</b></td>
                                                <td><Button type={e.status} /></td>
                                            </tr>
                                        ))
                                        : <tr>
                                            <td><span className='text-danger'>Error fetching data.</span></td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LargeWidget
