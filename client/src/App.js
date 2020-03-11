import React from "react";
import Sidebar2 from "./components/Sidebar/Sidebar2";
import Navbar from "./components/Navbar/Navbar";
import EmpDashboard from "./pages/EmpDashboard/EmpDashboard";
import LeaveApproval from './pages/LeaveApproval/LeaveApproval'
import Grid from "@material-ui/core/Grid";
import Login from './pages/Login/Login'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="main">
        <Sidebar2/>
        {/* <EmpDashboard/> */}
        <LeaveApproval/>
      </div>
      {/* <Login/> */}
    </div>
  );
}

export default App;
