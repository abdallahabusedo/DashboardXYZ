import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import SelectPeriodButtons from "./SelectPeriodButtons";

import DaySelector from "./DaySelector";
import {
  myCalenderInnerContainer,
  myCalenderText,
  myCalenderTitleContainer,
} from "./MyCalenderStyles";
import { UpperContainer } from "@/partials/LayoutStyle";
const MyCalender = () => {
  const [selectedPeriod, setSelectedPeriod] = React.useState<
    "Day" | "Week" | "Month"
  >("Day");
  const [today, setToday] = React.useState(new Date());
  return (
    <Box sx={{ ...UpperContainer, mt: "35px" }}>
      <Box sx={myCalenderInnerContainer}>
        <Box sx={myCalenderTitleContainer}>
          <CalendarMonthIcon sx={{ color: "gray" }} />
          <Typography sx={myCalenderText}>My Calendar</Typography>
        </Box>
        <SelectPeriodButtons
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />
      </Box>
      <Divider />
      <DaySelector today={today} setToday={setToday} />
    </Box>
  );
};

export default MyCalender;
