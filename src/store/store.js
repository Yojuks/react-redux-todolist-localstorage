// import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../reducers/reducer";
// import loadState from "../reducers/localStorage";
// const persistedState = loadState();
// export const store = configureStore({ reducer: todosReducer });

import { createStore } from "redux";
import throttle from "lodash/throttle";
import { loadState, saveState } from "../reducers/localStorage";

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    todosReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(
    throttle(() => {
      saveState({
        tasks: store.getState().tasks,
      });
    }, 1000)
  );

  return store;
};

export default configureStore;
