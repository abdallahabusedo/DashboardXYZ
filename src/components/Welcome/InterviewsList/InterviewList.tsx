import { useAppSelector } from "@/app/redux/slices/hook";
import { SearchBox, UpperContainer, searchInput } from "@/partials/LayoutStyle";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";
import React from "react";
import InterviewItem from "./InterviewItem";
import {
  interviewListContainer,
  interviewListUpperContainer,
} from "./InterviewListStyle";

const InterviewList = () => {
  const interviewStore = useAppSelector((state: any) => state.interview);
  const [selectedInterview, setSelectedInterview] = React.useState(
    interviewStore?.currentInterviewIndex
  );
  return (
    <Box
      sx={{
        ...UpperContainer,
        ...interviewListUpperContainer,
      }}
    >
      {/* Search Bar */}
      <Box sx={{ ...SearchBox, width: "100%", mr: "10px" }}>
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
      <Box sx={interviewListContainer}>
        {interviewStore.interviews.map((interview: any, index: number) => {
          return (
            <InterviewItem
              interview={interview}
              key={index}
              selectedInterview={selectedInterview}
              setSelectedInterview={setSelectedInterview}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default InterviewList;
