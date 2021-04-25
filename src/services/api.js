import axios from 'axios';
axios.defaults.baseURL = 'https://todos-project-api.herokuapp.com'


export default {
    user : {
        login: credentials => axios.post("/auth/login", {credentials}).then(res => res)
    }
}