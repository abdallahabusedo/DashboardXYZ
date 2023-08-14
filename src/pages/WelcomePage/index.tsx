"use client";
import { store } from "@/app/redux/store";
import Interviews from "@/components/Welcome/InterviewsList/Interviews";
import MyCalender from "@/components/Welcome/MyCalender/MyCalender";
import DashboardLayout from "@/partials/Layout";
import { Provider } from "react-redux";
const WelcomePage = () => {
  return (
    <Provider store={store}>
      <DashboardLayout>
        <MyCalender />
        <Interviews />
      </DashboardLayout>
    </Provider>
  );
};

export default WelcomePage;
