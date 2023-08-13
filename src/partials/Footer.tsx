import React from "react";
import {
  Box,
  TextField,
  Typography,
  MenuList,
  MenuItem,
  Divider,
} from "@mui/material";
import { LogoBox, LogoTypo } from "./LayoutStyle";

const Footer = () => {
  const menuStyle = { fontSize: "18px", fontWeight: "600" };
  return (
    <Box sx={{ bgcolor: "black", color: "white", px: "50px", py: "15px" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: "1" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            XYZ
          </Typography>
        </Box>
        <MenuList sx={{ display: "flex" }}>
          <MenuItem sx={menuStyle}>About</MenuItem>
          <MenuItem sx={menuStyle}>Careers</MenuItem>
          <MenuItem sx={menuStyle}>Support</MenuItem>
          <MenuItem sx={menuStyle}>Privacy Policy</MenuItem>
          <MenuItem sx={menuStyle}>Terms & Condidtions</MenuItem>
        </MenuList>
      </Box>
      <Divider style={{ background: "#EDEDEDaa", marginBottom: "15px" }} />
      <Box>
        <Typography>Copyright © 2022 XYZ. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
