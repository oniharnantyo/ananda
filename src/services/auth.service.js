import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = "http://128.199.106.246:8000/v1"

const login = (email, password) => {
    const headers = {
        // 'Content-Type': 'application/json',
        // "Access-Control-Allow-Origin" : '*',
    };
    return axios
        .post(API_URL + '/auth', {
            email, password
        }, { headers })
        .then((response) => {
            console.log(response)
            if (response.data.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data.data))
            }
            return response.data
        })
    // .catch((response) => {
    //     console.log(response)
    // });
}
const logout = () => {
    localStorage.removeItem('user')
}

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username, email, password
    });
}
const getCurrentUser = () => {
    const token = JSON.parse(localStorage.getItem('user'))
    console.log(token)
    const decodedToken = jwtDecode(token?.accessToken)
    return decodedToken
}

const isAuthenticated = () => {
    return localStorage.getItem("user") ? true : false
}

const AuthService = {
    register, login, logout, getCurrentUser, isAuthenticated
}


export default AuthService;