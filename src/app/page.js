import { AddTodo, Menu, Todo } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex justify-between p-5 fixed">
      <Menu />
      <Todo />
      <AddTodo />
    </div>
  );
};

export default page;
