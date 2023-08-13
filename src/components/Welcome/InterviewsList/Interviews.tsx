import { Box } from "@mui/material";
import InterviewList from "./InterviewList";
import InterviewsDetails from "./InterviewsDetails";
const Interviews = () => {
  return (
    <Box sx={{ display: "flex", mt: "25px" }}>
      <InterviewList />
      <InterviewsDetails />
    </Box>
  );
};

export default Interviews;
