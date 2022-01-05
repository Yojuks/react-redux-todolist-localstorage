import "./App.css";
import { Provider } from "react-redux";
import MainInput from "./components/MainInput/MainInput";
import { store } from "./store/store";
import configureStore from "./store/store";
import TodoElements from "./components/TodoElements/TodoElements";
import FilteredButtons from "./components/FilteredButtons/FilteredButtons";

// const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainInput />
        <TodoElements />
        <FilteredButtons />
      </div>
    </Provider>
  );
}

export default App;
