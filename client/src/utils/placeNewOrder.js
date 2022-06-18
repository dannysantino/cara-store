import { store } from '../redux/store'
import { setError, userRequest } from './requestMethods'

export const placeNewOrder = async sessionId => {
    try {
        const { cart: { products }, user: { currentUser: { _id } } } = store.getState();
        const { data } = await userRequest.post(
            `/orders/new/${_id}?session_id=${sessionId}`, { products });
        return data;
    } catch (err) {
        throw new Error(setError(err), { cause: err });
    }
}