//Import Package
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

//Views
import Wrapper from "./Views/Wrapper";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper />
    </div>
  );
}

export default App;
