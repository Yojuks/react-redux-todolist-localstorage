export const addTodoElement = (todoItem) => {
  return {
    type: "ADD-TODO-ELEMENT",
    payload: todoItem,
  };
};

export const deleteTodoElement = (id) => {
  return {
    type: "REMOVE-TODO-ELEMENT",
    payload: id,
  };
};

export const toggleTodoElement = (id) => {
  return {
    type: "TOGGLE-TODO-ELEMENT",
    payload: id,
  };
};

export const visibilityFilters = (params) => {
  return {
    type: "SET_FILTER",
    payload: params,
  };
};

export const clearCompletedElements = () => {
  return {
    type: "CLEAR_COMPLETE",
  };
};
