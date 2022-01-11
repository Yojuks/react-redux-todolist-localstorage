import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { visibilityFilters, clearCompletedElements } from "../../actions/actions";
import { TodoSelector } from "../../selector/selector";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./filteringButtons.css";

export default function FilteringButtons() {
  const dispatch = useDispatch();

  const visibilityFilter = useSelector((state) => state.visibilityFilters);
  const todos = useSelector((state) => TodoSelector(state.tasks, visibilityFilter));

  const filterElements = (params) => {
    dispatch(visibilityFilters(params));
  };

  const deleteCompletedElements = () => {
    dispatch(clearCompletedElements());
  };

  const leftItems = () => {
    return todos.filter((e) => e.checked === false).length;
  };

  return (
    <div>
      <div className="wrapper-filters">
        <div>
          <span className="items-left">{leftItems()} items left</span>
        </div>
        <div className="filters-group">
          <Button onClick={() => filterElements("all")}> All</Button>
          <Button onClick={() => filterElements("active")}>Active</Button>
          <Button onClick={() => filterElements("completed")}>Completed</Button>
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
