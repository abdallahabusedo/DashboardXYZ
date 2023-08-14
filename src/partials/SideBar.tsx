import {
  Box,
  Menu,
  MenuItem,
  MenuList,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import UserData from "./UserData";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";
const SideBar = () => {
  const [selectedTap, setSelectedTap] = React.useState<
    "Home" | "Calender" | "Support" | "Settings"
  >("Home");

  const menuItemStyle = {
    display: "flex",
    gap: "15px",
    padding: "14px 20px",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      bgcolor: "#222222aa",
      color: "white",
    },
  };
  const menuTextStyle = {
    fontSize: "18px",
    fontWeight: "600",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "370px",
        pl: "20px",
        mt: "25px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: -20,
          borderRadius: "100%",
          boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.2)",
          width: "36px",
          height: "36px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          bgcolor: "white",
          zIndex: "10",
          rotate: "180deg",
        }}
      >
        <ArrowForwardIosIcon />
      </Box>
      <UserData />
      <MenuList>
        <MenuItem
          sx={{
            ...menuItemStyle,
            mt: "20px",
            bgcolor: selectedTap == "Home" ? "#222222" : "white",
            color: selectedTap == "Home" ? "white" : "black",
          }}
          onClick={() => setSelectedTap("Home")}
        >
          <CottageOutlinedIcon />
          <Typography sx={menuTextStyle}>Home</Typography>
        </MenuItem>
        <MenuItem
          sx={{
            ...menuItemStyle,
            bgcolor: selectedTap == "Calender" ? "#222222" : "white",
            color: selectedTap == "Calender" ? "white" : "black",
          }}
          onClick={() => setSelectedTap("Calender")}
        >
          <CalendarMonthIcon />
          <Typography sx={menuTextStyle}>My Calender</Typography>
        </MenuItem>
      </MenuList>
      <Divider />
      <MenuList>
        <MenuItem
          sx={{
            ...menuItemStyle,
            bgcolor: selectedTap == "Support" ? "#222222" : "white",
            color: selectedTap == "Support" ? "white" : "black",
          }}
          onClick={() => setSelectedTap("Support")}
        >
          <SupportAgentIcon />
          <Typography sx={menuTextStyle}>Support</Typography>
        </MenuItem>
        <MenuItem
          sx={{
            ...menuItemStyle,
            bgcolor: selectedTap == "Settings" ? "#222222" : "white",
            color: selectedTap == "Settings" ? "white" : "black",
          }}
          onClick={() => setSelectedTap("Settings")}
        >
          <SettingsIcon />
          <Typography sx={menuTextStyle}>Settings</Typography>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default SideBar;
