import React from "react";
import { Grid, Paper } from "@material-ui/core/";
import PendingTable from "../../components/PendingTable/PendingTable";
import ApprovedTable from "../../components/ApprovedTable/ApprovedTable";

const LeaveApproval = () => {
  return (
    <div style={{ height: "90vh", boxSizing: "border-box", padding: "5px" }}>
      {/*spacing here adjusts margin between 2 rows which by default is 8px*/}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <PendingTable />
        </Grid>
        <Grid item xs={12}>
          <ApprovedTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default LeaveApproval;
