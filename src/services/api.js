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
function register(name, email,password,password_confirmation){
    return (
    axios.post("/signup", {name,email,password,password_confirmation}).then(res => res)
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