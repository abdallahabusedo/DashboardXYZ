import { Box } from "@mui/material";
import InterviewList from "./InterviewList";
import { interviewsContainer } from "./InterviewListStyle";
import InterviewsDetails from "./InterviewsDetails";
const Interviews = () => {
  return (
    <Box sx={interviewsContainer}>
      <InterviewList />
      <InterviewsDetails />
    </Box>
  );
};

export default Interviews;
