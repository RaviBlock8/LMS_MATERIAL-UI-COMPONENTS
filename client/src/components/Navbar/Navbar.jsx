import React from "react";
import { styled } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Box
} from "@material-ui/core/";

import AccountCircle from "@material-ui/icons/AccountCircle";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <LMSAppBar position="static">
        <LMSToolbar>
          <div>
            <img
              style={{ width: "7vw" }}
              alt="block8 logo"
              src={require("./block8-logo-fullcolor-ondarkbackground.png")}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Typography style={{ textAlign: "left" }}>
              {" "}
              <b>LMS|ADMIN</b>
            </Typography>
          </div>

          <div>
          <Box component="span" fontSize="0.9rem" fontFamily="Helvetica">Ravi verma </Box>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Log out</MenuItem>
            </Menu>
          </div>
        </LMSToolbar>
      </LMSAppBar>
    </div>
  );
};

let LMSToolbar = styled(Toolbar)({
  display: "grid",
  width: "100vw",
  height: "10vh",
  boxSizing: "border-box",
  gridTemplateColumns: "18vw 70vw 12vw"
});

let LMSAppBar = styled(AppBar)({
  padding: "0px",
  width: "100vw",
  boxSizing: "border-box"
});

export default Navbar;
