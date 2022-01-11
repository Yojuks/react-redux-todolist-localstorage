export const selectTodos = (state) => state.tasks;

export const TodoSelector = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case "completed": {
      return todos.filter((todo) => todo.checked);
    }
    case "active": {
      return todos.filter((todo) => !todo.checked);
    }
    default:
    case "all": {
      return todos;
    }
  }
};
