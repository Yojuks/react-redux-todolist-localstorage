import React from "react";
import { List } from "antd";
import TodoElement from "../TodoElement/TodoElement";
import { selectTodos } from "../../selector/selector";
import "./todoElements.css";

const TodoElements = () => {
  console.log("render TodoElementssss");
  const todos = useSelector(selectTodos);

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
