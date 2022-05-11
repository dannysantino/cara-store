import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getOrders, cancelOrder } from '../redux/actions/orderActions'
import { useOrderRows } from '../utils/dataGridColumns'
import DataTable from '../components/DataTable'

const Orders = () => {
    const dispatch = useDispatch();
    const { fetching, error, orders } = useSelector(state => state.orders);

    const deleteOrder = id => cancelOrder(dispatch, id);
    const { columns } = useOrderRows(deleteOrder);

    useEffect(() => {
        !orders.length && getOrders(dispatch);
    }, [orders, dispatch]);

    return (
        <DataTable
            fetching={fetching}
            error={error}
            rows={orders}
            columns={columns}
        />
    )
}

export default Orders
