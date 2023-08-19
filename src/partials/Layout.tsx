import React from "react";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
import Footer from "./Footer";
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
          // height: "calc(100vh - 100px)",
        }}
      >
        <SideBar />
        <Box
          sx={{
            bgcolor: "#EDEDED",
            // minHeight: "calc(100vh - 100px)",
            width: "100%",
            height: "100%",
            px: "30px",
            pb: "30px",
            overflow: "hidden",
          }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default DashboardLayout;
