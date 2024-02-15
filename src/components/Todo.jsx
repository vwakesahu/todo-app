"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { AddTodo } from ".";
import { useStateValue } from "@/context/StateProvider";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";

const TaskList = dynamic(() => import("./TaskList"), { ssr: false });
const Todo = () => {
  const [isNewTask, setIsNewTask] = useState(false);
  const [{ tasks }, dispatch] = useStateValue();

  return (
    <div className="h-screen w-full ">
      <div className="h-[93%] mr-4 p-4 ">
        <div className="text-2xl font-bold">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Today
          </h1>
          <div className="text-sm font-medium mt-2">
            <p>
              Remaining Tasks: <span className="text-red-600 font-bold">1</span>
            </p>
            {/* <Link href="/api-todo">
              <Badge className={"mt-2 cursor-pointer"}>See Api Todo</Badge>
            </Link> */}
          </div>
        </div>

        {isNewTask && (
          <div className="mt-2 px-2 py-3">
            <AddTodo />
          </div>
        )}
        <div className="mt-6">
          {/* Listing out tasks */}
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Todo;
