"use client";
import React from "react";
import App from "./_app";
import { StateProvider } from "@/context/StateProvider";
import { initialState } from "@/context/intialState";
import reducer from "@/context/reducer";

const page = () => {
  return (
    <div>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </div>
  );
};

export default page;
