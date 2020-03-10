import React from "react";
import Grid from "@material-ui/core/Grid";
import Charts from "../../components/Charts/Charts"
import LeaveList from '../../components/LeaveList/LeaveList'
import LeaveTable from '../../components/LeaveTable/LeaveTable'

export default function EmpDashboard() {
  return (
    <div style={{height:"90vh",boxSizing:"border-box",padding:"5px"}}>
      <Grid container  spacing={2}>
          
          <Grid item xs={6}>
            <LeaveList/>
          </Grid>
          <Grid item xs={12}>
            <LeaveTable/>
          </Grid>
          
      </Grid>
    </div>
  );
}
