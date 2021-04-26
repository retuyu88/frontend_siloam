import axios from 'axios';
import authHeader from "./authHeader";
axios.defaults.baseURL = 'https://todos-project-api.herokuapp.com'

export const userService = {
    login,
    register,
    getList,
    getItemList
}


function login(email, password){
    return (
    axios.post("/auth/login", {email,password}).then(res => res)
    )
}
function register(username, email,password){
    return (
    axios.post("/auth/login", {username,email,password}).then(res => res)
    )
}
function getList(){
    return (
    axios.post("/todos", {headers : authHeader()}).then(res => res)
    )
}
function getItemList(id){
    return (
    axios.post(`/todos/${id}/items`, {headers : authHeader()}).then(res => res)
    )
}