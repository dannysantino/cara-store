import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getOrders, updateOrder, cancelOrder } from '../redux/actions/orderActions'
import { getUsers } from '../redux/actions/usersActions'
import { useOrderRows } from '../utils/dataGridColumns'
import DataTable from '../components/DataTable'

const Orders = () => {
    const dispatch = useDispatch();
    const { orders: { fetching, error, orders }, users: { users } } = useSelector(state => state);

    const deleteOrder = id => cancelOrder(dispatch, id);
    const handleUpdate = id => updateOrder(dispatch, id, { status: document.getElementById('status').value });
    const { columns } = useOrderRows(deleteOrder, handleUpdate);

    useEffect(() => {
        !users.length && getUsers(dispatch);
        !orders.length && getOrders(dispatch);
    }, [users, orders, dispatch]);

    return (
        <>
            {
                orders.length && users.length && (
                    <DataTable
                        fetching={fetching}
                        error={error}
                        rows={orders}
                        columns={columns}
                    />
                )
            }
        </>
    )
}

export default Orders
