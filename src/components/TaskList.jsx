"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
const TaskList = ({tasks}) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div className="divide-y flex flex-col">
        {/* Task 1 */}
        <div
          class="inline-flex items-center py-1 cursor-pointer"
          onClick={handleCheckBox}
        >
          <label
            class="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="indigo"
          >
            <input
              type="checkbox"
              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-500 checked:bg-indigo-500 checked:before:bg-indigo-500 hover:before:opacity-10"
              id="indigo"
              checked={isChecked ? "checked" : ""}
            />
            <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <div className="text-sm w-full flex items-center justify-between">
            <p className={isChecked ? "line-through" : ""}>
              Create a fictional character for a short story.
            </p>
            <div className="mr-3 border rounded-full flex items-center justify-center p-2 hover:bg-textColor hover:border-none hover:text-white cursor-pointer">
              <IoIosArrowForward />
            </div>
          </div>
        </div>

        {/* Task 2 */}
        <div class="inline-flex items-center py-1 cursor-pointer">
          <label
            class="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="amber"
          >
            <input
              type="checkbox"
              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
              id="amber"
            />
            <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <div className="text-sm w-full flex items-center justify-between">
            <p className="line-through text-gray-400">
              Research and compile a list of interesting facts about a random
              animal.
            </p>
            <div className="mr-3 border rounded-full flex items-center justify-center p-2 hover:bg-textColor hover:border-none hover:text-white cursor-pointer">
              <IoIosArrowForward />
            </div>
          </div>
        </div>

        {/* Task 3 */}
        <div class="inline-flex items-center py-1 cursor-pointer">
          <label
            class="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="pink"
          >
            <input
              type="checkbox"
              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
              id="pink"
            />
            <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <div className="text-sm w-full flex items-center justify-between">
            <p className="line-through text-gray-400">
              Draw a doodle of a surreal landscape
            </p>
            <div className="mr-3 border rounded-full flex items-center justify-center p-2 hover:bg-textColor hover:border-none hover:text-white cursor-pointer">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
