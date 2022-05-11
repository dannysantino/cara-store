import {
    actionInit,
    actionFailure,
    getProductsSuccess,
    addProductSuccess,
    updateProductSuccess,
    deleteProductSuccess,
} from '../reducers/productReducers'
import { publicRequest, userRequest, setError } from '../../utils/requestMethods'

export const getProducts = async dispatch => {
    dispatch(actionInit());
    try {
        const { data } = await publicRequest.get('/products');
        dispatch(getProductsSuccess(data));
    } catch (err) {
        dispatch(actionFailure(setError(err)));
    }
}

export const addNewProduct = async (dispatch, formData) => {
    dispatch(actionInit());
    try {
        const { data } = await userRequest.post('/products/admin/add', formData);
        dispatch(addProductSuccess(data));
        return data.name;
    } catch (err) {
        dispatch(actionFailure(setError(err)));
        throw new Error(setError(err));
    }
}

export const updateProduct = async (dispatch, id, formData) => {
    dispatch(actionInit());
    try {
        const { data } = await userRequest.put(`/products/admin/update/${id}`, formData);
        dispatch(updateProductSuccess({ id, data }));
        return data.name;
    } catch (err) {
        dispatch(actionFailure(setError(err)));
        throw new Error(setError(err));
    }
}

export const deleteProduct = async (dispatch, id) => {
    dispatch(actionInit());
    try {
        await userRequest.delete(`/products/admin/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(actionFailure(setError(err)));
    }
}