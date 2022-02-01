import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
// import ReactDOM from "react-dom";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The future home of SLBC's new website!</p>
        <Button variant="contained">Hello!</Button>
      </header>
    </div>
  );
}

// ReactDOM.render(<App />, document.querySelector("#app"));

export default App;
