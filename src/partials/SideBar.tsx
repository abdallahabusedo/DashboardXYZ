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
import CottageIcon from "@mui/icons-material/Cottage";
const SideBar = () => {
  const [selectedTap, setSelectedTap] = React.useState("Home");
  return (
    <Box
      sx={{
        minHeight: "calc(100% - 100px)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "370px",
        pl: "20px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 0,
          borderRadius: "100%",
          boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.2)",
          width: "36px",
          height: "36px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <ArrowForwardIosIcon />
      </Box>
      <UserData />
      <MenuList>
        <MenuItem>
          <CottageIcon />
          <Typography variant="body1" color="initial">
            Home
          </Typography>
        </MenuItem>
        <MenuItem>
          <CottageIcon />
          <Typography variant="body1" color="initial">
            My Calender
          </Typography>
        </MenuItem>
      </MenuList>
      <Divider />
      <MenuList>
        <MenuItem>
          <CottageIcon />
          <Typography variant="body1" color="initial">
            Support
          </Typography>
        </MenuItem>
        <MenuItem>
          <CottageIcon />
          <Typography variant="body1" color="initial">
            Settings
          </Typography>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default SideBar;
