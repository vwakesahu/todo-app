"use client";
import { useStateValue } from "@/context/StateProvider";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const TaskList = () => {
  const [isChecked, setIsChecked] = useState([]);
  const [{ tasks }, dispatch] = useStateValue();

  // useEffect(() => {
  //   console.log(tasks);
  // }, []);

  const handleCheckBox = (taskId) => {
    setIsChecked((prevChecked) => {
      const newChecked = [...prevChecked];
      const index = newChecked.indexOf(taskId);
      if (index === -1) {
        newChecked.push(taskId);
      } else {
        newChecked.splice(index, 1);
      }
      return newChecked;
    });
  };

  return (
    <div>
      <div className="divide-y flex flex-col">
        {tasks.map((item) => (
          <div
            key={item.id}
            className="inline-flex items-center py-1 cursor-pointer"
          >
            <label
              className={`relative flex items-center p-3 rounded-full cursor-pointer `}
              htmlFor={item.id}
            >
              <input
                type="checkbox"
                className={`before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-yellow-500 checked:bg-yellow-500 checked:before:bg-yellow-500 hover:before:opacity-10`}
                id={item.id}
                checked={isChecked.includes(item.id)}
                onChange={() => handleCheckBox(item.id)}
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <div className="text-sm w-full flex items-center justify-between">
              <p
                className={
                  isChecked.includes(item.id)
                    ? "line-through text-gray-400"
                    : ""
                }
              >
                {item.title}
              </p>
              <div className="mr-3 border rounded-full flex items-center justify-center p-2 hover:bg-textColor hover:border-none hover:text-white cursor-pointer">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
