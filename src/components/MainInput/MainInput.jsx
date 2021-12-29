import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "../../selector/selector";
import { addTodoElement } from "../../actions/actions";
import TodoElements from "../TodoElements/TodoElements";
import { Input, Button } from "antd";

import "./Input.css";
import "antd/dist/antd.css";

const MainInput = () => {
  const [value, setValue] = useState("");
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  console.log("render MainInput");

  const onSubmit = () => {
    console.log(value);
    if (value) {
      console.log(dispatch(addTodoElement(value)));
    }
    setValue("");
  };

  return (
    <div>
      <Input
        size="middle"
        className="input-width"
        type="text"
        value={value}
        placeholder="enter text"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" onClick={onSubmit}>
        Submit
      </Button>
      <TodoElements todos={todos} />
    </div>
  );
};

export default MainInput;
