import { Menu, Todo, TodoView } from "@/components";
import React from "react";

const page = () => {
  const tasks = [];
  return (
    <div className="w-full flex justify-between p-5 fixed">
      <Menu />
      <Todo tasks={tasks} />
      <TodoView />
    </div>
  );
};

export default page;
