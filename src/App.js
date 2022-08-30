import "./App.css";
import { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <h1 className="App">{currentTime}</h1>
    </>
  );
};

export default App;
