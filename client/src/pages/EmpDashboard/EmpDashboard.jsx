import React from "react";
import {Grid,Paper} from "@material-ui/core/";
import Charts from "../../components/Charts/Charts"
import LeaveList from '../../components/LeaveList/LeaveList'
import LeaveTable from '../../components/LeaveTable/LeaveTable'

export default function EmpDashboard() {
  return (
    <div style={{height:"90vh",boxSizing:"border-box",padding:"5px"}}>
      {/*spacing here adjusts margin between 2 rows which by default is 8px*/}
      <Grid container  spacing={2}>
          
          <Grid item xs={6}>
            <LeaveList/>
          </Grid>
          <Grid item xs={6}>
            <Paper align="center">Bar Graph</Paper>
          </Grid>
          <Grid item xs={12}>
            <LeaveTable/>
          </Grid>
          
      </Grid>
    </div>
  );
}
