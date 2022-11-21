import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { PageCalcule } from "./pages/pageCalcule";

function App() {
  const [entry, setEntry] = useState(false);

  return (
    <div>
      {entry ? (
        <PageCalcule setEntry={setEntry} />
        ) : (
        <HomePage setEntry={setEntry} />
      )}
    </div>
  );
}

export default App;
