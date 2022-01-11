import React from "react";
import { List } from "antd";
import TodoElement from "../TodoElement/TodoElement";
import { TodoSelector } from "../../selector/selector";
import { useSelector } from "react-redux";
import "./todoElements.css";

const TodoElements = () => {
  const visibilityFilter = useSelector((state) => state.visibilityFilters);
  const todos = useSelector((state) => TodoSelector(state.tasks, visibilityFilter));

  return (
    <div>
      <List size="large" className="list">
        {todos && todos.length
          ? todos.map((todo) => <TodoElement todo={todo} key={todo.id} />)
          : "no todo elements"}
      </List>
    </div>
  );
};

export default TodoElements;
