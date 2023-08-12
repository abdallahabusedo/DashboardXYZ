import React from "react";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
const DashboardLayout = ({ children }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flex: "1",
          mt: "100px",
          height: "100%",
        }}
      >
        <SideBar />
        <Box
          sx={{
            bgcolor: "gray",
            height: "calc(100% - 200px)",
            minHeight: "100%",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
