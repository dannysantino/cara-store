import axios from 'axios'
import jwt_decode from 'jwt-decode'

const BASE_URL = 'https://carastoreapi.herokuapp.com/';

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL
});

export const setError = e => e.response && e.response.data
    ? e.response.data
    : e.message;

export const verifyToken = () => {
    const token = localStorage.getItem('userToken');
    if (token) {
        return jwt_decode(token).exp * 1000 < Date.now() ? false : true;
    } else {
        return false;
    }
}