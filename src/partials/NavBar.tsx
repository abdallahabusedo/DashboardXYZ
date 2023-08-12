import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import {
  LogoBox,
  LogoTypo,
  NavBarContainer,
  NavButtons,
  SearchBox,
  searchInput,
} from "./LayoutStyle";
import UserData from "./UserData";
const NavBar = () => {
  return (
    <Box sx={NavBarContainer}>
      {/* Logo */}
      <Box sx={LogoBox}>
        <Typography sx={LogoTypo}>XYZ</Typography>
      </Box>
      {/* Search Bar */}
      <Box sx={SearchBox}>
        <TextField
          id="outlined-start-adornment"
          placeholder="Search"
          size="small"
          sx={searchInput}
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
        />
      </Box>
      {/* Nav Buttons */}
      <Box sx={NavButtons}>
        <Image src="/world.png" width={24} height={24} alt="missed" />
        <Image src="/notification.png" width={24} height={24} alt="missed" />
        <UserData />
      </Box>
    </Box>
  );
};

export default NavBar;
