import {
    actionInit,
    actionFailure,
    getOrdersSuccess,
    cancelOrderSuccess
} from '../reducers/orderReducers'
import { userRequest, setError } from '../../utils/requestMethods'

export const getOrders = async dispatch => {
    dispatch(actionInit());
    try {
        const { data } = await userRequest.get('orders/admin/userorders');
        dispatch(getOrdersSuccess(data));
    } catch (err) {
        dispatch(actionFailure(setError(err)));
    }
}

export const cancelOrder = async (dispatch, id) => {
    dispatch(actionInit());
    try {
        await userRequest.delete(`/orders/admin/${id}`);
        dispatch(cancelOrderSuccess(id));
    } catch (err) {
        dispatch(actionFailure(setError(err)));
    }
}