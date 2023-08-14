import { configureStore } from "@reduxjs/toolkit";
import interviewSlice from "./slices/interviewSlice";
export const store = configureStore({
  reducer: {
    interview: interviewSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
