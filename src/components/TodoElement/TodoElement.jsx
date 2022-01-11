import React from "react";
import { deleteTodoElement, toggleTodoElement } from "../../actions/actions";
import { useDispatch } from "react-redux";
import { Checkbox } from "antd";

const TodoElement = ({ todo }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteTodoElement(id));
  };

  const toggle = (id) => {
    dispatch(toggleTodoElement(id));
  };

  return (
    <div className="list-item">
      <Checkbox checked={todo.checked} onClick={() => toggle(todo.id)} />
      <div className={todo.checked ? "toggle" : ""} key={todo.id}>
        {todo.title}
      </div>
      <span onClick={() => onDelete(todo.id)}>x</span>
    </div>
  );
};

export default TodoElement;
