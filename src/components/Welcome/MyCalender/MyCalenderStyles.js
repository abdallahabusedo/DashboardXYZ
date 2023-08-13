// MyCalender
export const myCalenderInnerContainer = { display: "flex" };

export const myCalenderTitleContainer = {
  display: "flex",
  flex: "1",
  gap: "10px",
  mb: "10px",
  alignItems: "center",
};

export const myCalenderText = { fontSize: "24px", fontWeight: "600" };

export const daySelectorContainer = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  mt: "20px",
  gap: "12px",
};

export const createMeetingButton = {
  border: "1px solid black",
  p: "4px 8px",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  bgcolor: "black",
  color: "white",
  padding: "10px 20px",
  ml: "12px",
  ":hover": {
    bgcolor: "gray",
    color: "white",
    border: "1px solid gray",
  },
};

export const todayButton = {
  border: "1px solid black",
  p: "4px 8px",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  ":hover": {
    bgcolor: "gray",
    color: "white",
    border: "1px solid gray",
  },
};

export const dateTextPrim = {
  fontSize: "18px",
  fontWeight: "600",
};
export const dateTextSec = {
  fontSize: "24px",
  fontWeight: "700",
};

export const dateContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  p: "15px",
  bgcolor: "#F1F1F1",
  borderRadius: "10px",
};
