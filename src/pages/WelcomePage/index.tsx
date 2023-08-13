"use client";
import Interviews from "@/components/Welcome/InterviewsList/Interviews";
import MyCalender from "@/components/Welcome/MyCalender/MyCalender";
import DashboardLayout from "@/partials/Layout";
const WelcomePage = () => {
  return (
    <DashboardLayout>
      <MyCalender />
      <Interviews />
    </DashboardLayout>
  );
};

export default WelcomePage;
