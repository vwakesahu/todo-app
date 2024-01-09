import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Checkbox } from "./ui/checkbox";
import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";
import { cn } from "@/lib/utils";
import { MdDelete } from "react-icons/md";
import { DialogDemo } from "./Modal";
import { GoPencil } from "react-icons/go";

const TaskList = () => {
  const [isChecked, setIsChecked] = useState([]);
  const [{ tasks, taskShow }, dispatch] = useStateValue();
  const [mobModal, setMobModal] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    console.log(tasks);
  }, []);

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
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    dispatch({
      type: actionType.SET_TASKS,
      tasks: updatedTasks,
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleId = (taskId) => {
    // setMobModal(true);
    setTitle("");
    dispatch({
      type: actionType.SET_SINGLE_TASK,
      taskShow: taskId,
    });
  };

  const handleSaveChanges = (id) => {
    // Find the task with the given id
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        const updatedTasks = [...tasks];
        updatedTasks[i] = { ...updatedTasks[i], title, date };
        dispatch({
          type: actionType.SET_TASKS,
          tasks: updatedTasks,
        });
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        break;
      }
    }
  };

  return (
    <div>
      <div className="divide-y flex flex-col px-3 mt-3">
        {tasks &&
          tasks.map((item) => (
            <div
              key={item.id}
              className="items-top flex items-center md:justify-normal justify-between space-x-5 py-4"
            >
              <div className="flex items-center gap-5">
                <div className="md:hidden">
                  <DialogDemo
                    MainButtonText={<GoPencil />}
                    title={title}
                    setTitleFuct={setTitle}
                    onchangeTitle={(e) => setTitle(e.target.value)}
                    date={date}
                    setDateFunct={setDate}
                    onchangeDate={(e) => setDate(e.target.value)}
                    buttonText={"Save Changes"}
                    description={
                      "To change a todo, click the Save Changes button or use the provided form."
                    }
                    buttonHandleFunct={() => handleSaveChanges(item.id)}
                  />
                </div>
                <Checkbox
                  id={item.id}
                  checked={isChecked.includes(item.id)}
                  onCheckedChange={() => handleCheckBox(item.id)}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor={item.id}
                    className={cn(
                      isChecked.includes(item.id)
                        ? "line-through text-muted-foreground"
                        : "",
                      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    )}
                    onClick={() => handleId(item.id)}
                  >
                    {item.title}
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Date: {item.date}
                  </p>
                </div>
              </div>

              <div
                className="md:hidden cursor-pointer bg-red-500 text-background p-2 rounded-full"
                onClick={() => handleDeleteTask(item.id)}
              >
                <MdDelete />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaskList;
