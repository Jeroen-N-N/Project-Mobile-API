import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { AUTH_LOGIN, PROJECT_INDEX, PROJECT_SHOW } from './path';

axios.defaults.baseURL = 'https://jeroen.link/api/'

AsyncStorage.getItem('jwt').then((response) => {
    if (response !== null) {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response;
    }
});

export const AuthLogin = async ({ email, password }) => {
    // Send promise request with login details;
    return axios.post(AUTH_LOGIN, { email, password });
}

export const ProjectIndex = async () => {
    // Send promise request;
    return axios.get(PROJECT_INDEX);
}

export const ProjectShow = async ({ id }) => {
    // Send promise request with product id in the URL;
    return axios.get(PROJECT_SHOW + id);
}

























//
// export const LoginDispatch = async ({email, password}) => {
//     return axios.post(AUTH_LOGIN, { email, password });
// }
//
// export const LogoutDispatch = async () => {
//     AsyncStorage.removeItem('auth');
//     window.location.reload(false);
// }






















/*
let base = axios.create({
    baseURL: 'https://api.jeroen.link/api/'
});



base.interceptors.request.use(function (config) {
    AsyncStorage.getItem('jwt').then((response) => {
        if(response !== null) {
            config.headers.Authorization = 'Bearer ' + response;
        }
    })

    return config;
})

base.interceptors.response.use(function (response) {


    return response.data;
}, function (error) {

    if(error.response.data.message === 'Token has expired' || error.response.data.message === 'Wrong number of segments') {
        AsyncStorage.removeItem('jwt').then(() => {
            window.location.reload(false);
        })
    }

    return Promise.reject(error.response);
});


export default base;

 */