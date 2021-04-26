import React from 'react';
import { Login } from "./views/login";
import ListPage from "./views/list/ListPage";
import { Register } from "./views/register";
import './App.css'

const token = localStorage.getItem('user_token')

function App() {
  
  return (
    <div>
       {token ? (
        <ListPage></ListPage> 
      ) : (
        <div style={{display: 'flex', justifyContent:'space-around'}}>
        <Login></Login> 
        <Register></Register>
        </div>
      )}
      
      
    </div>
  )
}

export default App;
