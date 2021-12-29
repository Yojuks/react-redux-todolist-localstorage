const initialState = {
  tasks: [
    {
      title: "first",
      id: "1",
      checked: false,
    },
    {
      title: "second",
      id: "12",
      checked: false,
    },
  ],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-TODO-ELEMENT":
      return {
        ...state,
        tasks: [...state.tasks, { title: action.payload, id: Date.now(), checked: false }],
      };
    case "REMOVE-TODO-ELEMENT":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE-TODO-ELEMENT":
      return {
        ...state,
        tasks: state.tasks.map((todo) =>
          todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
        ),
      };
    default:
      return state;
  }
};
