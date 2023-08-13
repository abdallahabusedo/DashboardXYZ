import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InterviewState {
  interviews: any;
}

const initialState: InterviewState = {
  interviews: [
    {
      id: "1",
      image: "/interview1.png",
      Title: "Interview With Microsoft",
      interviewDate: new Date("Tuesday 17, August 2023  8:00 PM").toISOString(),
      location: "New Jersey, United States",
      attendees: [
        {
          fullName: "Ahmed Hagazy",
          jobTitle: "Software Developer",
          badge: "/Badges.png",
          profilePic: "/Maskgroup.png",
        },
        {
          fullName: "Ahmed Hagazy",
          jobTitle: "Software Developer",
          badge: "/Badges.png",
          profilePic: "/Maskgroup2.png",
        },
      ],
      duration: "60",
      organizer: "Mohamed Ali",
      meetingType: "Interview ",
      meetingFormat: "Virtual Meeting",
      meetingLink:
        "https://us06web.zoom.us/j/85274834351pwd=ODFXNWljT1gzN0w0T3drLzR3UFRoZz09",
      meetingAgenda:
        "Lorem ipsum dolor sit amet consectetur. Mus nibh ornare facilisis commodo fermentum. Nibh dui malesuada pulvinar ut donec morbi id.",
    },
    {
      id: "2",
      image: "/interview2.png",
      Title: "Meeting with QNB",
      interviewDate: new Date("Tuesday 17, August 2023  8:00 PM").toISOString(),
      location: "New Jersey, United States",
      attendees: [
        {
          fullName: "Ahmed Hagazy",
          jobTitle: "Software Developer",
          badge: "/Badges.png",
          profilePic: "/Maskgroup.png",
        },
        {
          fullName: "Ahmed Hagazy",
          jobTitle: "Software Developer",
          badge: "/Badges.png",
          profilePic: "/Maskgroup2.png",
        },
      ],
      duration: "90",
      organizer: "Mohamed Ali",
      meetingType: "Interview ",
      meetingFormat: "Virtual Meeting",
      meetingLink:
        "https://us06web.zoom.us/j/85274834351pwd=ODFXNWljT1gzN0w0T3drLzR3UFRoZz09",
      meetingAgenda:
        "Lorem ipsum dolor sit amet consectetur. Mus nibh ornare facilisis commodo fermentum. Nibh dui malesuada pulvinar ut donec morbi id.",
    },
    {
      id: "3",
      image: "/interview1.png",
      Title: "Interview With Microsoft",
      interviewDate: new Date("Tuesday 17, August 2023  8:00 PM").toISOString(),
      location: "New Jersey, United States",
      attendees: [
        {
          fullName: "Ahmed Hagazy",
          jobTitle: "Software Developer",
          badge: "/Badges.png",
          profilePic: "/Maskgroup.png",
        },
        {
          fullName: "Ahmed Hagazy",
          jobTitle: "Software Developer",
          badge: "/Badges.png",
          profilePic: "/Maskgroup2.png",
        },
        {
          fullName: "Ahmed Hagazy",
          jobTitle: "Software Developer",
          badge: "/Badges.png",
          profilePic: "/Maskgroup2.png",
        },
        {
          fullName: "Ahmed Hagazy",
          jobTitle: "Software Developer",
          badge: "/Badges.png",
          profilePic: "/Maskgroup2.png",
        },
      ],
      duration: "120",
      organizer: "Mohamed Ali",
      meetingType: "Interview ",
      meetingFormat: "Virtual Meeting",
      meetingLink:
        "https://us06web.zoom.us/j/85274834351pwd=ODFXNWljT1gzN0w0T3drLzR3UFRoZz09",
      meetingAgenda:
        "Lorem ipsum dolor sit amet consectetur. Mus nibh ornare facilisis commodo fermentum. Nibh dui malesuada pulvinar ut donec morbi id.",
    },
    {
      id: "4",
      image: "/interview1.png",
      Title: "Interview With Microsoft",
      interviewDate: new Date("Tuesday 17, August 2023  8:00 PM").toISOString(),
      location: "New Jersey, United States",
      attendees: [
        {
          fullName: "Ahmed Hagazy",
          jobTitle: "Software Developer",
          badge: "/Badges.png",
          profilePic: "/Maskgroup.png",
        },
        {
          fullName: "Ahmed Hagazy",
          jobTitle: "Software Developer",
          badge: "/Badges.png",
          profilePic: "/Maskgroup2.png",
        },
      ],
      duration: "60",
      organizer: "Mohamed Ali",
      meetingType: "Interview ",
      meetingFormat: "Virtual Meeting",
      meetingLink:
        "https://us06web.zoom.us/j/85274834351pwd=ODFXNWljT1gzN0w0T3drLzR3UFRoZz09",
      meetingAgenda:
        "Lorem ipsum dolor sit amet consectetur. Mus nibh ornare facilisis commodo fermentum. Nibh dui malesuada pulvinar ut donec morbi id.",
    },
  ],
};

export const interviewSlice = createSlice({
  name: "interview",
  initialState,
  reducers: {},
});

export const {} = interviewSlice.actions;
export default interviewSlice.reducer;
