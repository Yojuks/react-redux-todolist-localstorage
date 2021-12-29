import "./App.css";
import { Provider } from "react-redux";
import MainInput from "./components/MainInput/MainInput";
// import { store } from "./store/store";
import configureStore from "./store/store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainInput />
      </div>
    </Provider>
  );
}

export default App;
