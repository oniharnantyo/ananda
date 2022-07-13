import axios from "axios";

const API_URL = "http://128.199.106.246:8000/v1"

    const login = (email, password)=>{
        const headers = {
            // 'Content-Type': 'application/json',
            // "Access-Control-Allow-Origin" : '*',
        };
        return axios
        .post(API_URL+'/auth',{
            email, password
        },{headers})
        .then((response) =>{
            console.log(response)
            if(response.data.accessToken){
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data
        });
    }
    const logout=()=>{
        localStorage.removeItem('user')
    }
    const register= (username, email, password)=>{
        return axios.post(API_URL+"signup",{
            username, email, password
    });
    }
    const getCurrentUser = ()=>{
        return JSON.parse(localStorage.getItem('user'))
    }

    const AuthService={
        register, login, logout, getCurrentUser
    }
    

export default AuthService;