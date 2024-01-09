"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import Lottie from "lottie-react";
import Loading from "@/assets/animations/loading.json"
export default function UserProfile({ params }) {
  const [todo, setTodo] = useState();
  const { id } = params;

  const fetchTodo = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      // console.log("Todo data:", response.data);
      setTodo(response.data);
    } catch (error) {
      console.error("Error fetching todo:", error);
    }
  };

  useEffect(() => {
    fetchTodo();
    // console.log(todo);
  }, [id]);

  return (
    <div>
      {todo != undefined ? (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <div className="border-2 border-gray-400 rounded-2xl lg:min-w-[1000px] px-16 md:px-32 md:py-52 py-32 ">
            <div className="flex items-center justify-center flex-col">
              <p>Id: {todo?.id}</p>
              <p>User id: {todo?.userId}</p>
              <p>Title: {todo?.title}</p>
              <p>
                Completed:{" "}
                {todo.completed === false ? (
                  <Badge
                    className={
                      "bg-red-500 text-background hover:text-foreground cursor-pointer"
                    }
                  >
                    {todo.completed.toString()}
                  </Badge>
                ) : (
                  <Badge
                    className={
                      "bg-green-500 text-background hover:text-foreground cursor-pointer"
                    }
                  >
                    {todo.completed.toString()}
                  </Badge>
                )}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen flex items-center justify-center md:pb-32 pb-16">
          <Lottie animationData={Loading} />
        </div>
      )}
    </div>
  );
}
