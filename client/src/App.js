import React from "react";
// import Sidebar from './components/Sidebar'
import Sidebar2 from "./components/Sidebar/Sidebar2";
import Navbar from "./components/Navbar/Navbar";
import LeaveTable from "./components/LeaveTable/LeaveTable";
import LeaveList from "./components/LeaveList/LeaveList";
import Charts from "./components/Charts/Charts";
import EmpDashboard from "./pages/EmpDashboard/EmpDashboard";
import Grid from "@material-ui/core/Grid";
import Login from './pages/Login/Login'

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <div id="main">
        <Sidebar2/>
        <EmpDashboard/>
      </div> */}
      <Login/>
    </div>
  );
}

export default App;
