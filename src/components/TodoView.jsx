import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import Hello from "@/assets/animations/hello.json";
import Lottie from "lottie-react";

const TodoView = () => {
  const [{ tasks, taskShow }, dispatch] = useStateValue();
  const [index, setIndex] = useState();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    dispatch({
      type: actionType.SET_TASKS,
      tasks: updatedTasks,
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "date") {
      setDate(value);
    }
  };

  // useEffect(() => {
  //   console.log(title, date);
  // }, [title, date]);

  const [taskId, setTaskId] = useState();

  useEffect(() => {
    setTaskId(taskShow);
  }, [taskShow]);

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

  // useEffect(() => {
  //   console.log(taskId);
  // }, [taskId]);

  return (
    <div className="h-screen w-[55%] ">
      <div className="h-[93%]  border rounded-xl mr-4 p-4 ">
        <div className="font-semibold text-lg text-headingColor">Task:</div>
        <div>
          {taskShow === undefined ? (
            <div>
              <p className="mb-16 mt-2">Hello, there I hope you doing well. This app is made by @vwakesahu.</p>
              <Lottie animationData={Hello} />
            </div>
          ) : (
            <div>
              {tasks.map(
                (item) =>
                  item.id === taskShow && (
                    <div key={item.id} className="mt-4">
                      <Input
                        type="text"
                        placeholder={item.title}
                        className=""
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                      />
                      <div className="mt-2">
                        <Input
                          type="text"
                          placeholder={`Date: ${item.date}`}
                          className=""
                          name="date"
                          value={date}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex justify-end">
                        <Badge
                          onClick={() => handleDeleteTask(item.id)}
                          className={
                            "mt-4 bg-red-600 text-background cursor-pointer py-2"
                          }
                        >
                          <MdDelete />
                          <p>Delete</p>
                        </Badge>
                      </div>

                      <div className="mt-4 flex justify-between items-center">
                        <Button onClick={() => handleSaveChanges(item.id)}>
                          Change Todo
                        </Button>
                        {/* <button
                          className="w-full bg-yellowColor hover:bg-yellow-500 text-white py-2 rounded-lg"
                          onClick={() => handleSaveChanges(item.id)}
                        >
                          Save Changes
                        </button> */}
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoView;
