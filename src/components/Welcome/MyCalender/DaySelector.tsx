import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Typography } from "@mui/material";
import { addDays, format } from "date-fns";
import Image from "next/image";
import {
  createMeetingButton,
  dateContainer,
  dateTextPrim,
  dateTextSec,
  daySelectorContainer,
  todayButton,
} from "./MyCalenderStyles";
import React from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DaySelector = ({ setToday, today }: any) => {
  const [date, setDate] = React.useState<any>(today);
  const getNextORPrevDay = (Enm: number) => {
    setToday((prev: any) => addDays(prev, Enm));
  };
  const [showCalender, setShowCalender] = React.useState(false);
  React.useEffect(() => {
    console.log(date);
    setShowCalender(!showCalender);
  }, [date]);
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
        <Typography sx={dateTextPrim}>{format(today, "EEEE")}</Typography>
        <Typography sx={dateTextSec}>{format(today, "dd")}</Typography>
        <Typography sx={dateTextPrim}>{format(today, "MMMM")}</Typography>
        <Typography sx={dateTextPrim}>{format(today, "yyyy")}</Typography>
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
