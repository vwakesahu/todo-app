"use client";
import React from "react";
import App from "./_app";
import { StateProvider } from "@/context/StateProvider";
import { initialState } from "@/context/intialState";
import reducer from "@/context/reducer";
import { ThemeProvider } from "next-themes";

const page = () => {
  return (
    <div>
      <StateProvider initialState={initialState} reducer={reducer}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <App />
        </ThemeProvider>
      </StateProvider>
    </div>
  );
};

export default page;
