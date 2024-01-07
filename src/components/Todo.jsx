"use client";
import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { TaskList } from ".";
const Todo = ({ tasks }) => {
  const [isNewTask, setIsNewTask] = useState(false);

  const handleNewTask = () => {
    setIsNewTask(!isNewTask);
  };
  return (
    <div className="h-screen w-full ">
      <div className="h-[93%] mr-4 p-4 ">
        <div className="text-2xl font-bold">
          <p>Today</p>
          <div className="text-sm font-medium">
            <p>
              Remaining Tasks: <span className="text-red-600 font-bold">1</span>
            </p>
          </div>
        </div>

        {/* Add new task */}
        <div
          className="w-full border flex items-center gap-4 mt-10 px-2 py-3 rounded-lg cursor-pointer hover:bg-gray-200"
          onClick={handleNewTask}
        >
          <p>
            <IoAddOutline />
          </p>
          <p className="text-sm">Add New Task</p>
        </div>

        {isNewTask ? (
          <div className="mt-2 px-2 py-3"> Add New Task</div>
        ) : (
          <div className="mt-2">
            {/* Listing out tasks */}
            <TaskList />
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
