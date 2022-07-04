import {
    actionInit,
    actionFailure,
    getOrdersSuccess,
    updateOrderSuccess,
    cancelOrderSuccess
} from '../reducers/orderReducers'
import { userRequest, setError } from '../../utils/requestMethods'

export const getOrders = async dispatch => {
    dispatch(actionInit());
    try {
        const { data } = await userRequest.get('/orders/admin/userorders');
        dispatch(getOrdersSuccess(data));
    } catch (err) {
        dispatch(actionFailure(setError(err)));
    }
}

export const updateOrder = async (dispatch, id, status) => {
    dispatch(actionInit());
    try {
        const { data } = await userRequest.put(`/orders/admin/edit/${id}`, status);
        dispatch(updateOrderSuccess({ id, data }));
        return data.name;
    } catch (err) {
        dispatch(actionFailure(setError(err)));
        throw new Error(setError(err));
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