import axios from 'axios';
axios.defaults.baseURL = 'https://todos-project-api.herokuapp.com'

export const userService = {
    login,
    register
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