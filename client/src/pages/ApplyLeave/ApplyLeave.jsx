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
  Button
} from "@material-ui/core/";
import { styled } from "@material-ui/core/styles";

const ApplyLeave = () => {
  const [leaveType, setLeaveType] = useState("");
  const inputLabel = useRef(null);
  const handleTypeChange = event => {
    setLeaveType(event.target.value);
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
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}>
                <FormControl variant="outlined" style={{ width: "100%" }}>
                  <InputLabel
                    ref={inputLabel}
                    id="demo-simple-select-outlined-label"
                  >
                    Leave Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
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
              <Grid item xs={3}>
                <FormLabel>Leave Type</FormLabel>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="outlined" style={{ width: "100%" }}>
                  <InputLabel
                    ref={inputLabel}
                    id="demo-simple-select-outlined-label"
                  >
                    Leave Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
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
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows="4"
                  defaultValue="Default Value"
                  variant="outlined"
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
            <Grid item xs={12} align="center" style={{paddingTop:"50px"}}>
              <Button variant="contained" color="primary">
                Submit
              </Button>
              <CancelButton variant="contained" >
                Cancel
              </CancelButton>
            </Grid>
          </form>
        </Paper>
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
    background:theme.palette.primary.light,
    color:"white",
    marginLeft:"10px"
  }));

export default ApplyLeave;
