import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { visibilityFilters, clearCompletedElements } from "../../actions/actions";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./filteredButtons.css";
import { TodoSelector } from "../../selector/selector";

export default function FilteredButtons() {
  console.log('render Filtered Buttons');
  const dispatch = useDispatch();

  const visibilityFilter = useSelector((state) => state.visibilityFilters);
  const todos = useSelector((state) => TodoSelector(state.tasks, visibilityFilter));

  const onFitlerClick = (params) => {
    console.log(params);
    dispatch(visibilityFilters(params));
  };

  const deleteCompletedElements = () => {
    dispatch(clearCompletedElements());
  };

  return (
    <div className="todolist-footer">
      <div className="buttons">
        <div>
          <span className="items-left">{todos.length} items left</span>
        </div>
        <div className="buttons-group">
          <Button onClick={() => onFitlerClick("all")}> All</Button>
          <Button onClick={() => onFitlerClick("active")}>Active</Button>
          <Button onClick={() => onFitlerClick("completed")}>Completed</Button>
        </div>
        <div>
          <Button className="completed" onClick={() => dispatch(deleteCompletedElements())}>
            Clear completed
          </Button>
        </div>
      </div>
    </div>
  );
}
