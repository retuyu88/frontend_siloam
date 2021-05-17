import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Submit } from "./views/submit";

import "./App.css";


function App() {
   
    return (
      <div>
        <Router>       
          <Route path="/" component={Submit} />
        </Router>
      </div>
    );
}


export default App;
