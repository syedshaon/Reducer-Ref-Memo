import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const prvName = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prvName.current = name;
  }, [name]);

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>My Previous Name is {prvName.current}</div>
      <div>I rendered {renderCount.current} times.</div>

      <ButtonComponent />
    </>
  );
}

export default App;
