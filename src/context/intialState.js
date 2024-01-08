import { fetchTasks } from "../utils/fetchLocalStorageData";

// const taskInfo = fetchTasks();

export const initialState = {
  tasks: [
    {
      id: 1,
      date: "new Date()",
      color: {
        colorCode: "green-500",
        colorName: "Green",
      },
      title:
        "Research and compile a list of interesting facts about a random animal.",
    },
    {
      id: 2,
      date: "new Date()",
      color: { colorCode: "pink-500", colorName: "Pink" },

      title: "Draw a doodle of a surreal landscape.",
    },
    {
      id: 3,
      date: "new Date()",
      color: { colorCode: "lime-500", colorName: "Lime" },

      title:
        "Design a dream vacation itinerary, including destinations and activities.",
    },
    {
      id: 4,
      date: "new Date()",
      color: { colorCode: "yellow-500", colorName: "Yellow" },

      title: "Draw a doodle of a surreal landscape.",
    },
    {
      id: 5,
      date: "new Date()",
      color: { colorCode: "red-500", colorName: "Red" },

      title: "Draw a doodle of a surreal landscape.",
    },
  ],
};
