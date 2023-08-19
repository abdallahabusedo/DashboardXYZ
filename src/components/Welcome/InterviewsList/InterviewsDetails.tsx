import { useAppSelector } from "@/app/redux/slices/hook";
import { UpperContainer } from "@/partials/LayoutStyle";
import { Box, Menu, MenuItem, TextField, Typography } from "@mui/material";
import { format } from "date-fns";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import Image from "next/image";
import React from "react";
import {
  interviewDetailsContainer,
  interviewLeftSideBoxContainer,
  interviewText,
  interviewTimeBox,
} from "./InterviewListStyle";
const InterviewsDetails = () => {
  const interviewStore = useAppSelector((state: any) => state.interview);
  let interview =
    interviewStore.interviews[interviewStore?.currentInterviewIndex];
  const [interviewTime, setInterviewTime] = React.useState("");
  const [day, setDay] = React.useState("");
  const [dayDate, setDayDate] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");
  React.useEffect(() => {
    setInterviewTime(
      new Date(interview.interviewDate).toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    );
    setDay(format(new Date(interview.interviewDate), "EEEE"));
    setDayDate(format(new Date(interview.interviewDate), "dd"));
    setMonth(format(new Date(interview.interviewDate), "MMMM"));
    setYear(format(new Date(interview.interviewDate), "yyyy"));
  }, [interview]);
  return (
    <Box
      sx={{
        ...UpperContainer,
        ...interviewDetailsContainer,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: "20px",
          bgcolor: "#F6F6F6",
          p: "8px",
          borderRadius: "100px",
        }}
      >
        <Image src="/dots.png" width={24} height={24} alt="missed" />
      </Box>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <Box>
            <Box
              {...bindTrigger(popupState)}
              sx={{
                position: "absolute",
                right: "20px",
                bgcolor: "#F6F6F6",
                p: "8px",
                borderRadius: "100px",
                cursor: "pointer",
              }}
            >
              <Image src="/dots.png" width={24} height={24} alt="missed" />
            </Box>
            <Menu
              {...bindMenu(popupState)}
              sx={{
                left: "-50px",
                top: "10px",
              }}
            >
              <MenuItem
                sx={{
                  m: "5px 10px",
                  transition: "all 0.2s ease-in-out",
                  ":hover": {
                    bgcolor: "black",
                    color: "white",
                    borderRadius: "5px",
                  },
                }}
                onClick={popupState.close}
              >
                Reschedule Meeting
              </MenuItem>
              <MenuItem
                sx={{
                  m: "5px 10px",

                  transition: "all 0.2s ease-in-out",
                  ":hover": {
                    bgcolor: "black",
                    color: "white",
                    borderRadius: "5px",
                  },
                }}
                onClick={popupState.close}
              >
                Cancel Meeting
              </MenuItem>
              <MenuItem
                sx={{
                  m: "5px 10px",

                  transition: "all 0.2s ease-in-out",
                  ":hover": {
                    bgcolor: "black",
                    color: "white",
                    borderRadius: "5px",
                  },
                }}
                onClick={popupState.close}
              >
                Add to calendar
              </MenuItem>
              <MenuItem
                sx={{
                  m: "5px 10px",
                  transition: "all 0.2s ease-in-out",
                  ":hover": {
                    bgcolor: "black",
                    color: "white",
                    borderRadius: "5px",
                  },
                }}
                onClick={popupState.close}
              >
                Send Reminder
              </MenuItem>
            </Menu>
          </Box>
        )}
      </PopupState>
      <Box
        sx={{
          display: "flex",
          gap: "18px",
        }}
      >
        <Box sx={interviewLeftSideBoxContainer}>
          <Image src={interview.image} width={50} height={50} alt="missing" />
          <Box sx={interviewTimeBox}>
            <Typography sx={interviewText}>{interviewTime}</Typography>
            <Typography sx={{ ...interviewText, color: "#A5A5A5" }}>
              {interview.duration / 60} Hours
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#A5A5A5",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {day}
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "600",
            }}
          >
            {dayDate}
          </Typography>
          <Typography
            sx={{
              color: "#A5A5A5",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {month}
          </Typography>
          <Typography
            sx={{
              color: "#A5A5A5",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {year}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {interview.Title}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "#A5A5A5",
                fontWeight: "400",
                marginRight: "10px",
              }}
            >
              Organizer
            </span>
            {interview.organizer}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "#A5A5A5",
                fontWeight: "400",
                marginRight: "10px",
              }}
            >
              Meeting Type
            </span>{" "}
            {interview.meetingType}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "#A5A5A5",
                fontWeight: "400",
                marginRight: "10px",
              }}
            >
              Meeting Format
            </span>{" "}
            {interview.meetingFormat}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: "15px" }}>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            mb: "10px",
          }}
        >
          Virtual Meeting
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Image src="/zoom.png" width={20} height={20} alt="missing" />
            <Image src="/zoom1.png" width={40} height={40} alt="missing" />
          </Box>
          <Box sx={{ flex: "1" }}>
            <Typography
              sx={{
                wordBreak: "break-word",
                color: "#2F5CD8",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {interview.meetingLink}
            </Typography>
          </Box>
          <Image src="/copy.png" width={20} height={20} alt="missing" />
        </Box>
      </Box>
      <Box sx={{ mt: "18px" }}>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            mb: "10px",
          }}
        >
          Meeting Agenda & Remarks:
        </Typography>
        <TextField
          placeholder="MultiLine with rows: 2 and rowsMax: 4"
          multiline
          fullWidth
          value={
            "Lorem ipsum dolor sit amet consectetur. Musasdasdasdsa nibh ornare facilisis commodo fermentum. Nibh dui malesuada pulvinar ut donec morbi."
          }
        />
      </Box>
      <Box sx={{ mt: "18px" }}>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              mb: "10px",
            }}
          >
            Meeting Attendees
          </Typography>
          <Typography
            sx={{
              color: "#FF9B05",
              bgcolor: "#FF9B0521",
              width: "25px",
              height: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100px",
            }}
          >
            {interview.attendees.length}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {interview.attendees &&
            interview.attendees.map((attendant: any, index: number) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Image
                    src={attendant.profilePic}
                    width={45}
                    height={45}
                    alt="missing"
                  />
                  <Box>
                    <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                      {attendant.fullName}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "#616161",
                        }}
                      >
                        {attendant.jobTitle}
                      </Typography>
                      <Image
                        src={attendant.badge}
                        width={60}
                        height={15}
                        alt="missing"
                      />
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default InterviewsDetails;
