import React from "react";
import { Box, TextField } from "@mui/material";
import { SearchBox, UpperContainer, searchInput } from "@/partials/LayoutStyle";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import InterviewItem from "./InterviewItem";

const InterviewList = () => {
  const interviewStore = useSelector((state: any) => state.interview);
  const [selectedInterview, setSelectedInterview] = React.useState(1);
  console.log(interviewStore);

  return (
    <Box
      sx={{
        ...UpperContainer,
        width: "460px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
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
