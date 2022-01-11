import React, { useState } from "react";

import { addTodoElement } from "../../actions/actions";
import { useDispatch } from "react-redux";

import { Input, Button } from "antd";

import "./Input.css";
import "antd/dist/antd.css";

const MainInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (value) {
      dispatch(addTodoElement(value));
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
    </div>
  );
};

export default MainInput;
