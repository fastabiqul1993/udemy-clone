//Import Package
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

//Navigations components
import Navbar from "./Components/Navbar/Navbar";
import Navbar2 from "./Components/Navbar/navbar2";
import Footer from "./Components/Footer/Footer";

//Main contents
import Wrapper from "./Views/Wrapper";
import Home from "./Content/Home";
import Detail from "./Content/Detail";
import Cart from "./Content/Cart";
import Whislist from "./Content/whislist";
import store from "./Publics/Redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Navbar2 />
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route
          exact
          path="/detail/:id"
          render={props => <Detail {...props} />}
        />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/whislist" component={Whislist} />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
