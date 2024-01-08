export const fetchTasks = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const taskInfo =
      localStorage.getItem("tasks") !== "undefined"
        ? JSON.parse(localStorage.getItem("tasks"))
        : localStorage.clear();

    return taskInfo;
  } else {
    return null;
  }
};
