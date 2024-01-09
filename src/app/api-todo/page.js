// src/app/api-todo/page.js
"use client";
import React, { useEffect, useState } from "react";
import ExternalTodoList from "./ExternalTodoList";
import axios from "axios";
import Loading from "@/assets/animations/loading.json";
import Lottie from "lottie-react";

const ApiTodo = () => {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const todosData = response.data;
        setTodos(todosData);
      } catch (error) {
        console.error("Error fetching todos:", error.message);
      } finally {
        // Ensure the loading screen is displayed for at least 3 seconds
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center md:pb-32 pb-16">
        <Lottie animationData={Loading} />
      </div>
    );
  }

  return (
    <div>
      <ExternalTodoList todos={todos} />
    </div>
  );
};

export default ApiTodo;
