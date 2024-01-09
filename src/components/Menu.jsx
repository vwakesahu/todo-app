import React, { useState } from "react";
import { ModeToggle } from "./ui/toggle-mode";
import { Input } from "@/components/ui/input";
import { IoAddOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { AddTodo } from ".";
const Menu = () => {
  const [isNewTask, setIsNewTask] = useState(false);

  const handleNewTask = () => {
    // console.log("Before state update:", isNewTask);
    setIsNewTask((prevIsNewTask) => !prevIsNewTask);
    // console.log("After state update:", isNewTask);
  };
  return (
    <div className="h-screen w-[55%] ">
      <div className="h-[93%]   border rounded-xl mr-4 p-4 ">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg text-headingColor">Menu</p>
          <ModeToggle />
        </div>

        {/* Search Field */}
        <div className="mt-6">
          <Input type="text" placeholder="Search" />
          {/* <input
            type="text"
            className="w-full bg-transparent border px-3 py-2 rounded-lg focus-within:outline-none focus:border-gray-300"
            placeholder="Search"
          /> */}

          {/* Add new task */}
          {/* <div onClick={handleNewTask} className="mt-6">
            <Button variant={"outline"}>
              {isNewTask ? (
                "Close"
              ) : (
                <div className="flex items-center gap-1">
                  <IoAddOutline className="mr-1 h-4 w-4" /> Add Todo
                </div>
              )}
            </Button>
          </div> */}

          <div className="mt-3"><AddTodo /></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
