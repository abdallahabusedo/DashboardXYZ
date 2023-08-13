import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { addHours, addMinutes, format } from "date-fns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
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
        display: "flex",
        bgcolor: isCurrentSelected ? "#222" : "#fff",
        color: isCurrentSelected ? "#fff" : "#000",
        width: "420px",
        borderRadius: "10px",
        border: "1px solid #EDEDED",
        padding: "15px",
        gap: "10px",
        justifyContent: "center",
        cursor: "pointer",
        // alignItems: "flex-start",
      }}
      onClick={() => setSelectedInterview(interview.id)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          minWidth: "62px",
        }}
      >
        <Image src={interview.image} width={50} height={50} alt="missing" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
            {new Date(interview.interviewDate).toLocaleString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "600", color: "#A5A5A5" }}
          >
            {interview.duration / 60} Hours
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          gap: "5px",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          {interview.Title}
        </Typography>
        <Typography
          sx={{ fontSize: "13px", fontWeight: "400", color: "#A5A5A5" }}
        >
          <CalendarMonthIcon fontSize="small" sx={{ mr: "4px" }} />
          {formateDate}
        </Typography>
        <Typography
          sx={{ fontSize: "13px", fontWeight: "400", color: "#A5A5A5" }}
        >
          <PlaceIcon fontSize="small" sx={{ mr: "4px" }} />
          {interview.location}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <PeopleOutlineIcon fontSize="small" />
          {interview.attendees
            .slice(0, 3)
            .map((attendant: any, index: number) => {
              return (
                <Box sx={{ borderRadius: "100px" }}>
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
                borderRadius: "100px",
                width: "25px",
                height: "25px",
                bgcolor: isCurrentSelected ? "white" : "black",
                color: isCurrentSelected ? "black" : "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
