import axios from 'axios';
// import authHeader from "./authHeader";
axios.defaults.baseURL = 'https://todos-project-api.herokuapp.com'
const token = localStorage.getItem("user_token")
console.log('token',token)

export const userService = {
    login,
    register,
    getList,
    getItemList,
    postItemList,
    deleteList,
    editList
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
async function getList(){
    return (
    axios.get("/todos", { headers: { Authorization: token } }).then((res) => {
        return res.data
      })
      .catch((error) => {
        console.error(error)
      })
    )
}
function getItemList(id){
    return (
    axios.get(`/todos/${id}/items`, {headers : {Authorization: token}}).then((res) => {
        return res.data
      })
      .catch((error) => {
        console.error(error)
      })
    )
}
function postItemList(id,name,progress_percentage){
  return (
  axios.post(`/todos/${id}/items`,{name,progress_percentage}, {headers : {Authorization: token}}).then((res) => {
      return res.data
    })
    .catch((error) => {
      console.error(error)
    })
  )
}
function deleteList(id,todoId){
  return (
  axios.delete(`/todos/${todoId}/items/${id}`, {headers : {Authorization: token}}).then((res) => {
      return res.data
    })
    .catch((error) => {
      console.error(error)
    })
  )
}
function editList(id,todoId,target_todo_id,name,progress_percentage){
  return (
  axios.put(`/todos/${todoId}/items/${id}`,{target_todo_id,name,progress_percentage}, {headers : {Authorization: token}}).then((res) => {
      return res.data
    })
    .catch((error) => {
      console.error(error)
    })
  )
}