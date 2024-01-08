"use client";
import { Menu, Todo, TodoView } from "@/components";
import { useStateValue } from "@/context/StateProvider";
import { useState } from "react";

function MyApp() {
  return (
    <div className="w-full flex justify-between p-5 fixed">
      <Menu />
      <Todo />
      <TodoView />
    </div>
  );
}

export default MyApp;
