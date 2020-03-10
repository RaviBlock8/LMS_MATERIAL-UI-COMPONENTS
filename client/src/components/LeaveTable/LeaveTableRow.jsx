import React from "react";
import {
    TableCell,
    TableRow,
    Link
  } from "@material-ui/core/";
import EditIcon from '@material-ui/icons/Edit';
const LeaveTableRow = (props) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {props.row.LeaveType}
      </TableCell>
      <TableCell align="right">{props.row.from}</TableCell>
      <TableCell align="right">{props.row.to}</TableCell>
      <TableCell align="right">{props.row.status}</TableCell>
      <TableCell align="right"><Link style={{cursor:"pointer"}}><EditIcon/></Link></TableCell>
    </TableRow>
  );
};

export default LeaveTableRow;
