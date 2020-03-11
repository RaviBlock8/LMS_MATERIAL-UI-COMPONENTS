import React from "react";
import { TableCell, TableRow, Link, Button,Paper } from "@material-ui/core/";
import { styled } from "@material-ui/core/styles";
const ApprovedTableRow = props => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {props.row.LeaveType}
      </TableCell>
      <TableCell align="right">{props.row.from}</TableCell>
      <TableCell align="right">{props.row.to}</TableCell>
      <TableCell align="right">{props.row.noofdays}</TableCell>
      <TableCell align="center">
      {props.row.status==="Approved"?<ApprovedPaper elevation={2}>Approved</ApprovedPaper>:<RejectPaper elevation={2}>Rejected</RejectPaper>}
      </TableCell>
    </TableRow>
  );
};



const ApprovedPaper =styled(Paper)(({theme})=>({
    padding:"0.4rem",
    fontSize:"0.6rem",
    color:"white",
    background:"#32cb00",
    textAlign:"center"
}))

const RejectPaper=styled(Paper)(({theme})=>({
    padding:"0.4rem",
    fontSize:"0.6rem",
    color:"white",
    background:"#a30000",
    textAlign:"center"
}))

export default ApprovedTableRow;
