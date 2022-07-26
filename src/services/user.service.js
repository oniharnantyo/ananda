import axios from "axios";
// import authHeader from "./auth-header";
// const API_URL = "http://128.199.106.246:8000/v1"
import api from './api'

    getPublicContent=()=>{
        return api.get('/all')
    }
    getUserBoard=()=>{
        return api.get('/all')
    }
    getModeratorBoard=()=>{
        return api.get('/all')
    }
    getAdminBoard=()=>{
        return api.get('/all')
    }

const UserService={
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
}

export default new UserService()