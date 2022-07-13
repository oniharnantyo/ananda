import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://128.199.106.246:8000/v1"

    getPublicContent=()=>{
        return axios.get(API_URL+"all")
    }
    getUserBoard=()=>{
        return axios.get(API_URL+'user', {headers:authHeader()})
    }
    getModeratorBoard=()=>{
        return axios.get(API_URL+'mod', {headers:authHeader()})
    }
    getAdminBoard=()=>{
        return axios.get(API_URL+'admin', {headers:authHeader()})
    }

const UserService={
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
}

export default new UserService()