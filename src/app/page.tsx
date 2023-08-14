"use client";
import WelcomePage from "@/pages/WelcomePage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function Home() {
  return <WelcomePage />;
}
