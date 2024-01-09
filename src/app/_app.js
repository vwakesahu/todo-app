"use client";
import { Menu, Todo, TodoView } from "@/components";
import MobMenu from "@/components/MobMenu";
import { DialogDemo } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";

function MyApp() {
  const [modal, setModal] = useState(false);
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
    <div>
      {/* For Desktop/Tablets */}
      <div className="w-full md:flex justify-between p-5 fixed hidden">
        <Menu />
        <Todo />
        <TodoView />
      </div>

      {/* For Mobile */}
      <div className="md:hidden flex">
        <div className="absolute right-3 top-5 text-3xl flex gap-2 items-center">
          <div>
            <ModeToggle />
          </div>
          <DialogDemo
            MainButtonText={<PlusIcon className="text-background text-sm" />}
            title={title}
            setTitleFuct={setTitle}
            onchangeTitle={(e) => setTitle(e.target.value)}
            date={date}
            setDateFunct={setDate}
            onchangeDate={(e) => setDate(e.target.value)}
            buttonText={"Add Todo"}
            description={
              "To add a new todo, click the Add Todo button or use the provided form."
            }
            buttonHandleFunct={handleAddTodo}
          />
        </div>

        <Todo />
      </div>
    </div>
  );
}

export default MyApp;
