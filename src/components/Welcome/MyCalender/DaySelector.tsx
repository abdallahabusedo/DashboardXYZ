import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Typography } from "@mui/material";
import { addDays, format } from "date-fns";
import Image from "next/image";
import React from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  createMeetingButton,
  dateContainer,
  dateTextPrim,
  dateTextSec,
  daySelectorContainer,
  todayButton,
} from "./MyCalenderStyles";

const DaySelector = ({ setToday, today }: any) => {
  const getNextORPrevDay = (Enm: number) => {
    setToday((prev: any) => addDays(prev, Enm));
  };
  const [day, setDay] = React.useState("");
  const [dayDate, setDayDate] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");
  React.useEffect(() => {
    setDay(format(today, "EEEE"));
    setDayDate(format(today, "dd"));
    setMonth(format(today, "MMMM"));
    setYear(format(today, "yyyy"));
  }, [today]);
  const [showCalender, setShowCalender] = React.useState(false);
  return (
    <Box sx={daySelectorContainer}>
      <Image
        src="/forword.png"
        width={24}
        height={24}
        alt="asd"
        style={{ cursor: "pointer" }}
        onClick={() => getNextORPrevDay(-1)}
      />
      <Box
        sx={{ ...dateContainer, position: "relative", cursor: "pointer" }}
        onClick={() => setShowCalender(!showCalender)}
      >
        <CalendarMonthIcon sx={{ color: "gray" }} />
        <Typography sx={dateTextPrim}>{day}</Typography>
        <Typography sx={dateTextSec}>{dayDate}</Typography>
        <Typography sx={dateTextPrim}>{month}</Typography>
        <Typography sx={dateTextPrim}>{year}</Typography>
        <Box
          sx={{
            position: "absolute",
            top: "70px",
            zIndex: "10",
            bgcolor: "white",
            boxShadow: "1px 1px 10px 1px  gray",
            display: showCalender ? "inline" : "none",
          }}
        >
          <Calendar date={today} onChange={(date) => setToday(date)} />
        </Box>
      </Box>
      <Image
        src="/forword.png"
        width={24}
        height={24}
        alt="asd"
        style={{ rotate: "180deg", cursor: "pointer" }}
        onClick={() => getNextORPrevDay(1)}
      />
      <Typography sx={todayButton} onClick={() => setToday(new Date())}>
        Today
      </Typography>
      <Typography sx={createMeetingButton}>Create Meeting</Typography>
    </Box>
  );
};

export default DaySelector;
