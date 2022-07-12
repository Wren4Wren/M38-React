import { useState, useEffect } from "react";
import Image from "./components/image";
import SignOrLog from "./components/signOrLog";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetchImages();
  }, []); //Every time the user's value changes, useEffect will run again

  return (
    <div className="App">
      <SignOrLog setter={setUser} />
    </div>
  );
};

export default App;
