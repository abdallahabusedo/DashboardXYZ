import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { TextPrim, textSec, userData } from "./LayoutStyle";

const UserData = () => {
  return (
    <Box sx={userData}>
      <Image src="/Ellipse.png" width={40} height={40} alt="missed" />
      <Box>
        <Typography sx={TextPrim}>Ahmed Hegazy</Typography>
        <Typography sx={textSec}>Professional Account</Typography>
      </Box>
      <Image src="/dots.png" width={24} height={24} alt="missed" />
    </Box>
  );
};

export default UserData;
