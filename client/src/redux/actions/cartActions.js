import { addProduct, removeProduct, updateProduct } from '../reducers/cartReducers'

export const addToCart = async (dispatch, item) => {
    try {
        dispatch(addProduct(item));
        return item.name;
    } catch (err) {
        throw new Error(err);
    }
}

export const removeFromCart = async (dispatch, item) => {
    try {
        dispatch(removeProduct(item));
        return item.name;
    } catch (err) {
        throw new Error(err);
    }
}

export const updateCartItem = async (dispatch, item) => {
    try {
        dispatch(updateProduct(item));
        return item.name;
    } catch (err) {
        throw new Error(err);
    }
}