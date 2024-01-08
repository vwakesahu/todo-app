"use client";
import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";
import React, { useState } from "react";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [{ tasks: currentTasks }, dispatch] = useStateValue();

  const handleAddTodo = () => {
    if (!title || !date) {
      // Handle validation or show an error message
      return;
    }

    const todo = {
      id: Math.floor(Math.random() * 100),
      date: date,
      title: title,
    };

    if (currentTasks === null) {
      dispatch({
        type: actionType.SET_TASKS,
        tasks: [todo],
      });
      localStorage.setItem("tasks", JSON.stringify([todo]));
    } else {
      const updatedTasks = [...currentTasks, todo];
      dispatch({
        type: actionType.SET_TASKS,
        tasks: updatedTasks,
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    setTitle("");
    setDate("");
  };

  return (
    <div className="w-full">
      <div className="flex gap-2">
        <input
          className="bg-transparent border px-3 rounded-lg focus:border-gray-400 border-gray-300 focus:outline-none py-2 w-full placeholder:text-gray-300 focus:placeholder:text-gray-400 placeholder:font-light"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className="bg-transparent border px-3 rounded-lg focus:border-gray-400 border-gray-300 focus:outline-none py-2 w-full placeholder:text-gray-300 focus:placeholder:text-gray-400 placeholder:font-light"
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <button
        className="mt-3 w-full bg-yellowColor text-white hover:bg-yellow-400 py-2 rounded-b-lg "
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
