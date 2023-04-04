import { useState } from "react";
import GetWeatherData from "./components/GetWeatherData";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GetWeatherData />
    </div>
  );
}

export default App;
