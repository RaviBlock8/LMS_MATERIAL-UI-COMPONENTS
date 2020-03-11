import React from "react";
import { TableCell, TableRow, Link, Button } from "@material-ui/core/";
import { styled } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
const PendingTableRow = props => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {props.row.LeaveType}
      </TableCell>
      <TableCell align="right">{props.row.from}</TableCell>
      <TableCell align="right">{props.row.to}</TableCell>
      <TableCell align="right">{props.row.noofdays}</TableCell>
      <TableCell align="center">
        <AcceptButton variant="contained">Accept</AcceptButton>
        <RejectButton variant="contained">Reject</RejectButton>
      </TableCell>
    </TableRow>
  );
};



const AcceptButton = styled(Button)(({ theme }) => ({
  padding: "0.4rem",
  fontSize: "0.5rem",
  color: "white",
  background: "#32cb00"
}));

const RejectButton = styled(Button)(({ theme }) => ({
  padding: "0.4rem",
  fontSize: "0.5rem",
  color: "white",
  background: "#a30000",
  marginLeft:"2px"
}));

export default PendingTableRow;
