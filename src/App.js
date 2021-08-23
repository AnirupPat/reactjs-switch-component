import logo from "./logo.svg";
import "./App.css";
import Switch from "./component/Switch";

function App() {
  return (
    <div className="App">
      <Switch default="OFF" />
      <Switch default="ON" />
    </div>
  );
}

export default App;
