//Import Package
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

//Views
import Wrapper from "./Views/Wrapper";
import Home from "./Content/Home";
import Detail from "./Content/Detail";
import Cart from "./Content/Cart";
import Whislist from "./Content/Whislist";

import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/cart" component={Cart} />
      <Route path="/whislist" component={Whislist} />
    </Router>
  );
}

export default App;
