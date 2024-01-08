import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const TodoView = () => {
  const [{ tasks, taskShow }, dispatch] = useStateValue();
  const [index, setIndex] = useState();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

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

  useEffect(() => {
    console.log(title, date);
  }, [title, date]);

  const [taskId, setTaskId] = useState();

  useEffect(() => {
    setTaskId(taskShow);
  }, [taskShow]);

  useEffect(() => {
    console.log(taskId);
  }, [taskId]);

  return (
    <div className="h-screen w-[55%] ">
      <div className="h-[93%] bg-gray-100 border rounded-xl mr-4 p-4 ">
        <div className="font-semibold text-lg text-headingColor">Task:</div>
        <div>
          {taskShow === 0 ? (
            <div>Render some Image</div>
          ) : (
            <div>
              {tasks.map(
                (item) =>
                  // Check if the current task's id matches the taskShow
                  item.id === taskShow && (
                    <div key={item.id}>
                      <input
                        type="text"
                        placeholder={item.title}
                        className="w-full px-3 py-2 mt-3 rounded-lg focus:outline-none border border-gray-300"
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                      />
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder={`Date: ${item.date}`}
                          className="w-full px-3 py-2 mt-3 rounded-lg focus:outline-none border border-gray-300"
                          name="date"
                          value={date}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div
                        className="mt-2 flex items-center gap-2 text-red-600 cursor-pointer"
                        onClick={() => handleDeleteTask(item.id)}
                      >
                        <MdDelete />
                        <p>Delete this task</p>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <button
                          className="w-full bg-yellowColor hover:bg-yellow-500 text-white py-2 rounded-lg"
                          onClick={() => handleSaveChanges(item.id)}
                        >
                          Save Changes
                        </button>
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
