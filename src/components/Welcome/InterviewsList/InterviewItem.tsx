import { setCurrentInterviewIndex } from "@/app/redux/slices/interviewSlice";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PlaceIcon from "@mui/icons-material/Place";
import { Box, Typography } from "@mui/material";
import { addMinutes } from "date-fns";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import {
  interviewAttendeesContainer,
  interviewItemContainer,
  interviewLeftSideBoxContainer,
  interviewMinDetails,
  interviewText,
  interviewTimeBox,
  plusAttendees,
  primTextInterview,
  secTextInterview,
} from "./InterviewListStyle";
const InterviewItem = ({
  interview,
  selectedInterview,
  setSelectedInterview,
}: any) => {
  const [formateDate, setFormateDate] = React.useState(
    new Date(interview.interviewDate).toLocaleString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  );
  let isCurrentSelected = selectedInterview == interview.id;
  const dispatch = useDispatch();
  React.useEffect(() => {
    setFormateDate(
      new Date(interview.interviewDate).toLocaleString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }) +
        " - " +
        addMinutes(
          new Date(interview.interviewDate),
          interview.duration
        ).toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
    );
  }, []);
  return (
    <Box
      sx={{
        ...interviewItemContainer,
        bgcolor: isCurrentSelected ? "#222" : "#fff",
        color: isCurrentSelected ? "#fff" : "#000",
      }}
      onClick={() => {
        setSelectedInterview(interview.id);
        dispatch(setCurrentInterviewIndex(interview.id));
      }}
    >
      <Box sx={interviewLeftSideBoxContainer}>
        <Image src={interview.image} width={50} height={50} alt="missing" />
        <Box sx={interviewTimeBox}>
          <Typography sx={interviewText}>
            {new Date(interview.interviewDate).toLocaleString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </Typography>
          <Typography sx={{ ...interviewText, color: "#A5A5A5" }}>
            {interview.duration / 60} Hours
          </Typography>
        </Box>
      </Box>
      <Box sx={interviewMinDetails}>
        <Typography sx={primTextInterview}>{interview.Title}</Typography>
        <Typography sx={secTextInterview}>
          <CalendarMonthIcon fontSize="small" sx={{ mr: "4px" }} />
          {formateDate}
        </Typography>
        <Typography sx={secTextInterview}>
          <PlaceIcon fontSize="small" sx={{ mr: "4px" }} />
          {interview.location}
        </Typography>
        <Typography sx={interviewAttendeesContainer}>
          <PeopleOutlineIcon fontSize="small" />
          {interview.attendees
            .slice(0, 3)
            .map((attendant: any, index: number) => {
              return (
                <Box sx={{ borderRadius: "100px" }} key={index}>
                  <Image
                    src={attendant.profilePic}
                    width={25}
                    height={25}
                    alt="missing"
                    style={{ borderRadius: "100px" }}
                  />
                </Box>
              );
            })}
          {interview.attendees.length > 3 && (
            <Box
              sx={{
                ...plusAttendees,
                bgcolor: isCurrentSelected ? "white" : "black",
                color: isCurrentSelected ? "black" : "white",
              }}
            >
              +{interview.attendees.length - 3}
            </Box>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default InterviewItem;