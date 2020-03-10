import React from "react";
import {styled } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core/";
import LeaveListRow from "./LeaveListRow";

function createData(leaveType,total,availed,available) {
  return {leaveType,total,availed,available };
}

const rows = [
  createData("Sick",10,0,10),
  createData("Casual",10,0,10),
  createData("Paid",10,0,10)
];

export default function SimpleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <CustomHeader>
          <TableRow>
            <CustomHeaderCell> </CustomHeaderCell>
            <CustomHeaderCell align="right">Total</CustomHeaderCell>
            <CustomHeaderCell align="right">Availed</CustomHeaderCell>
            <CustomHeaderCell align="right">Available</CustomHeaderCell>
          </TableRow>
        </CustomHeader>
        <TableBody>
          {rows.map(row => (
            <LeaveListRow key={row.name} row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const CustomHeader = styled(TableHead)(({ theme }) => ({
  background: theme.palette.primary.light
}));

const CustomHeaderCell = styled(TableCell)(({ theme }) => ({
  color:"white",
  fontWeight:"bold"
}));
