export const actionType = {
  SET_TASKS: "SET_TASKS",
  SET_SINGLE_TASK: 'SET_SINGLE_TASK',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };

      case actionType.SET_SINGLE_TASK:
        return {
            ...state,
            taskShow: action.taskShow,
        };

    default:
      return state;
  }
};

export default reducer;
