import React, { useState, useRef } from "react";
import {
  Paper,
  Container,
  Grid,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Input,
  Box,
  Button,
  Snackbar
} from "@material-ui/core/";
import MuiAlert from "@material-ui/lab/Alert";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { styled } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ApplyLeave = () => {
  const [leaveType, setLeaveType] = useState("");
  const [dayType, setDayType] = useState("");
  const inputLabel = useRef(null);
  const [Snackopen, setSnackOpen] = useState(false);
  const handleTypeChange = event => {
    setLeaveType(event.target.value);
  };
  const handleDayChange = event => {
    setDayType(event.target.value);
  };
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(fromDate);
  const handleFromDateChange = date => {
    setFromDate(date);
  };
  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };
  const handleToDateChange = date => {
    setToDate(date);
  };
  return (
    <div style={{ height: "90vh", boxSizing: "border-box", padding: "5px" }}>
      <Container>
        <Paper elevation={1} style={{ padding: "1.5rem", width: "60vw" }}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <FormLabel>Leave Date</FormLabel>
              </Grid>
              <Grid item xs={3}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="from-date"
                    label="From Date"
                    format="DD/MM/YYYY"
                    value={fromDate}
                    onChange={handleFromDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={3}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="to-date"
                    label="To Date"
                    format="DD/MM/YYYY"
                    value={toDate}
                    onChange={handleToDateChange}
                    minDate={fromDate}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={3}>
                <FormControl variant="outlined" style={{ width: "100%" }}>
                  <InputLabel ref={inputLabel} id="dday-label">
                    Day
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="day-type"
                    value={dayType}
                    onChange={handleDayChange}
                    labelWidth={"100%"}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Half"}>Half Day</MenuItem>
                    <MenuItem value={"Full"}>Full Day</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormLabel>Leave Type</FormLabel>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="outlined" style={{ width: "100%" }}>
                  <InputLabel ref={inputLabel} id="leave-type-label">
                    Leave Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="select-leave-type"
                    value={leaveType}
                    onChange={handleTypeChange}
                    labelWidth={"100%"}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Sick"}>Sick</MenuItem>
                    <MenuItem value={"Casual"}>Casual</MenuItem>
                    <MenuItem value={"Paid"}>Paid</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}>
                <FormLabel>Leave Description</FormLabel>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  id="description"
                  label="Description"
                  multiline
                  rows="4"
                  placeholder="Enter description..."
                  variant="outlined"
                  required
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid xs={3}></Grid>
              <Grid xs={5}>
                <WarningBox component="span">
                  Note:Attaching documents compulsory if applying for more than
                  2 days sick leave.
                </WarningBox>
              </Grid>
              <Grid xs={4}>
                <Input
                  accept="image/*"
                  id="raised-button-file"
                  multiple
                  type="file"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} align="center" style={{ paddingTop: "50px" }}>
              <Button variant="contained" color="primary" onClick={()=>{setSnackOpen(true)}}>
                Submit
              </Button>
              <CancelButton variant="contained">Cancel</CancelButton>
            </Grid>
          </form>
        </Paper>
        <Snackbar
          open={Snackopen}
          autoHideDuration={6000}
          onClose={handleSnackClose}
        >
          <Alert onClose={handleSnackClose} severity="success">
            Leave Applied
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};

const WarningBox = styled(Box)(({ theme }) => ({
  color: "#dd2c00",
  fontSize: "0.8rem",
  textAlign: "right"
}));

const CancelButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: "white",
  marginLeft: "10px"
}));

export default ApplyLeave;
