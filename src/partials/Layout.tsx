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
            height: "100%",
            width: "100%",
            pl: "30px",
            pb: "30px",
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
