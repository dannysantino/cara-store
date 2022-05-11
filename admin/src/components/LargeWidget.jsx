import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'timeago.js'

import { getOrders } from '../redux/actions/orderActions'

const LargeWidget = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.orders);

    useEffect(() => {
        !orders.length && getOrders(dispatch);
    }, [orders, dispatch]);

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
                                    orders.length && orders.map(e => (
                                        <tr key={e._id}>
                                            <td>
                                                <img src='img/users/3.png' className='img-thumbnail' alt='user-avatar' />
                                                <span className='name'>{e.userId}</span>
                                            </td>
                                            <td>{format(e.createdAt)}</td>
                                            <td>${e.amount}</td>
                                            <td><Button type={e.status} /></td>
                                        </tr>
                                    ))
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
