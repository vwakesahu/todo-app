import { fetchTasks } from "../utils/fetchLocalStorageData";

const taskInfo = fetchTasks();

export const initialState = {
  tasks: taskInfo,
  taskShow: undefined,
};
