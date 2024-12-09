import { useState } from "react";
import Name from "./components/Name";
import Buttons from "./components/Buttons";

function App() {
  const [name, setName] = useState("Random Name")

  const changeName = (randName) => {
    setName(randName);
  }

  return (
    <div className="h-screen">
      <Name name={name} />
      <Buttons changeName={changeName} />
    </div>
  );
}

export default App;
