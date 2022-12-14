import React, { useEffect, useState } from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
;
import Login from "./components/login/login";

import Navbar from "./Navbar";

import Register from "./components/login/register";
import Employeecard  from "./components/EmployeeCard/employeecard";
import Admin from "./components/Admin/admin";
import { Route, Link, Switch, BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import LeaderBoard from "./components/LeaderBoard/leaderboard";
import Leave from "./components/EmployeeCard/leave";
import { auth } from "./firebase"
import LandingPage from "./components/LeaderBoard/LandingPage";
import Dashboard from "./components/Admin/Dashboard";
function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);


  return (
  <BrowserRouter>
  <Router>
    
    <Switch>
    
      <Route exact path="/register" >{<Register/>}</Route>
      <Route exact path="/card" >{<Employeecard  name={userName}/>}</Route>
     
      <Route exact path="/leave" >{<Leave/>}</Route>
      <Route exact path="/dashboard" >{<Dashboard/>}</Route>  
      
      <Route path="/login" ><Login /></Route>
      <Route exact path="/" >{<LandingPage/>}</Route>
      <Route exact path="/admin" >{<Admin/>}</Route>
    </Switch>
  </Router>
  </BrowserRouter>
 
 

  );
}
export default App;