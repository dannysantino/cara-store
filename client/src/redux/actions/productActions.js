import { actionInit, actionFailure, getProductsSuccess } from '../reducers/productReducers'
import { publicRequest, setError } from '../../utils/requestMethods'

export const getProducts = async (dispatch, url) => {
    dispatch(actionInit());
    try {
        const { data } = await publicRequest.get(url);
        dispatch(getProductsSuccess(data));
    } catch (err) {
        dispatch(actionFailure(setError(err)));
    }
}