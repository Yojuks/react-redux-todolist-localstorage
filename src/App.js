import "./App.css";
import { Provider } from "react-redux";
import MainInput from "./components/MainInput/MainInput";
import { store } from "./store/store";
import TodoElements from "./components/TodoElements/TodoElements";
import FilteringButtons from "./components/FilteredButtons/FilteringButtons";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainInput />
        <TodoElements />
        <FilteringButtons />
      </div>
    </Provider>
  );
}

export default App;
