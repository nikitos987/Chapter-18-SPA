import React, { Component } from "react";
import { Route, NavLink, HashRoute, HashRouter } from "react-router-dom";
import Home from "./components/home";
import Stuff from "./components/stuff";
import Contacts from "./components/contacts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Single Page Application</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contacts" component={Contacts} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
