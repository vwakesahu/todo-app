"use client";
import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
        <Input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Input
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <Button onClick={handleAddTodo} className="mt-4">Add Todo</Button>
    </div>
  );
};

export default AddTodo;
