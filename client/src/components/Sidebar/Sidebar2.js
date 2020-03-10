import React, { useState } from "react";
// import "./Sidebar2.css";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Icon
} from "@material-ui/core/";
import { styled } from "@material-ui/styles/";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import TodayIcon from "@material-ui/icons/Today";

export default function Sidebar2(props) {
  let [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (e, index) => {
    setSelectedIndex(index);
  };
  return (
    <div id="sidebar">
      <Sidebar component="nav">
        <LmsListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
          color="primary"
        >
          <ListItemIcon>
            <Icon className="selected">
              <DashboardIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </LmsListItem>
        <LmsListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <Icon className="selected">
              <AddCircleIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Leave Apply" />
        </LmsListItem>
        <LmsListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <Icon className="selected">
              <DoneAllIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Leave Approval" />
        </LmsListItem>
        {true?<><Divider />
        <LmsListItem
          button
          selected={selectedIndex === 3}
          onClick={event => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <Icon className="selected">
              <PersonAddIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Add/Edit Employee" />
        </LmsListItem>
        <LmsListItem
          button
          selected={selectedIndex === 4}
          onClick={event => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <Icon className="selected">
              <TodayIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Leave Management" />
        </LmsListItem></>:''}
      </Sidebar>
    </div>
  );
}

const LmsListItem = styled(ListItem)(({theme})=>({
  "&.Mui-selected": {
    background:theme.palette.primary.main,
    color: "white"
  },
  "&.Mui-selected .selected": {
    color: "white"
  }
}));

const Sidebar = styled(List)(({ theme }) => ({
  
  height: "90vh",
  boxSizing: "border-box",
  color: theme.palette.primary.main,
  background: "#fff",
  boxShadow:" 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
}));
