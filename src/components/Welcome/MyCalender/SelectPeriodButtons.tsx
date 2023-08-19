import { Box, Typography } from "@mui/material";
const SelectPeriodButtons = ({ selectedPeriod, setSelectedPeriod }: any) => {
  const styledPeriodText = {
    width: "100%",
    minWidth: "60px",
    p: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: "5px",
    cursor: "pointer",
    ":hover": {
      color: "white",
      backgroundColor: "black",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "gray",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.0rem #fff",
    },
  };
  return (
    <Box
      sx={{
        bgcolor: "#F8F8F8",
        height: "40px",
        display: "flex",
        gap: "10px",
        p: "5px",
        borderRadius: "5px",
      }}
    >
      <Typography
        sx={{
          ...styledPeriodText,
          bgcolor: selectedPeriod == "Day" ? "black" : "white",
          color: selectedPeriod == "Day" ? "white" : "black",
        }}
        onClick={() => setSelectedPeriod("Day")}
      >
        Day
      </Typography>
      <Typography
        sx={{
          ...styledPeriodText,
          bgcolor: selectedPeriod == "Week" ? "black" : "white",
          color: selectedPeriod == "Week" ? "white" : "black",
        }}
        onClick={() => setSelectedPeriod("Week")}
      >
        Week
      </Typography>
      <Typography
        sx={{
          ...styledPeriodText,
          bgcolor: selectedPeriod == "Month" ? "black" : "white",
          color: selectedPeriod == "Month" ? "white" : "black",
        }}
        onClick={() => setSelectedPeriod("Month")}
      >
        Month
      </Typography>
    </Box>
  );
};

export default SelectPeriodButtons;
