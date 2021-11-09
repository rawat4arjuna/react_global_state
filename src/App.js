import "./App.css";
import Store from "./store";
import Left from "./components/left";
import Right from "./components/right";
function App() {
  return (
    <Store>
      <Left />
      <Right />
    </Store>
  );
}

export default App;
