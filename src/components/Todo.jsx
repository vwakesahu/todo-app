import React from "react";
import { IoAddOutline } from "react-icons/io5";
const Todo = () => {
  return (
    <div className="h-screen w-full ">
      <div className="h-[93%] mr-4 p-4 ">
        <div className="text-2xl font-bold">
          <p>Today</p>
          <div className="text-sm font-medium">
            <p>
              Remaining Tasks: <span className="text-red-600 font-bold">6</span>
            </p>
          </div>
        </div>

        {/* Add new task */}
        <div className="w-full border flex items-center gap-4 mt-10 px-2 py-3 rounded-lg cursor-pointer hover:bg-gray-200">
          <p>
            <IoAddOutline />
          </p>
          <p className="text-sm">Add New Task</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
