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

const DaySelector = ({ setToday, today }: any) => {
  const getNextORPrevDay = (Enm: number) => {
    setToday((prev: any) => addDays(prev, Enm));
  };
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
      <Box sx={dateContainer}>
        <CalendarMonthIcon sx={{ color: "gray" }} />
        <Typography sx={dateTextPrim}>{format(today, "EEEE")}</Typography>
        <Typography sx={dateTextSec}>{format(today, "dd")}</Typography>
        <Typography sx={dateTextPrim}>{format(today, "MMMM")}</Typography>
        <Typography sx={dateTextPrim}>{format(today, "yyyy")}</Typography>
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
