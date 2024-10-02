import "./App.css";
import React, { useEffect } from "react";
import Main from "./components/Main";
import "aos/dist/aos.css";
import Aos from "aos";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
