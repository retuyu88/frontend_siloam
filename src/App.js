import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { Login } from "./views/login";
import ListPage from "./views/list/ListPage";
import { Register } from "./views/register";
import "./App.css";

// const token = localStorage.getItem("user_token");

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" render={() => <Redirect to="/v1" />} />
        <Route path="/v1" component={ListPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
