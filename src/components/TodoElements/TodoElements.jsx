import React from "react";
import { List } from "antd";
import TodoElement from "../TodoElement/TodoElement";
import "./todoElements.css";

const TodoElements = ({ todos }) => {
  console.log("render TodoElementssss");

  return (
    <div>
      <List size="large" className="list">
        {todos.map((todo) => (
          <TodoElement todo={todo} key={todo.id} />
        ))}
      </List>
    </div>
  );
};

export default TodoElements;
