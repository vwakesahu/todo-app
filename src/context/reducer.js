export const actionType = {
  SET_TASKS: "SET_TASKS",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };

    default:
      return state;
  }
};

export default reducer;
