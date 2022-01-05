import { todosReducer } from "../reducers/reducer";
import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import { loadState, saveState } from "../reducers/localStorage";
import { logger } from "../middlewares/completedItemsMIddleware";
// import { addLocalStorage } from "../middlewares/addLocalStorage";

// const configureStore = () => {
//   const persistedState = loadState();
//   const store = createStore(
//     todosReducer,
//     persistedState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

//   store.subscribe(() => {
//     saveState({
//       tasks: store.getState().tasks,
//     });
//   });

//   return store;
// };

export const store = createStore(todosReducer, applyMiddleware(logger));

// export default configureStore;
