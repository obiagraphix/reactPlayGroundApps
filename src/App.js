import React from "react";
import MemberList from "./components/MemberList";
import HiddenMessages from "./components/HiddenMessages";
import { Nav } from "react-bootstrap";
import CountryList from "./components/CountryList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu, NewColor, Colors } from "./components/Containers";
import "./App.css";

const App = ({ store }) => {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Nav className="mr-auto">
            <Link to="/">Home</Link>

            <Link to="/countrylist">Country List</Link>

            <Link to="/hiddenmessages">Hidden Messages</Link>

            <Link to="/memberlist">Member List</Link>

            <Link to="/color">Color List</Link>
          </Nav>
        </div>
        <hr />

        <Switch>
          <Route exact path="/countrylist">
            <CountryList />
          </Route>

          <Route path="/hiddenmessages">
            <HiddenMessages />
          </Route>

          <Route path="/memberlist">
            <MemberList count={20} />
          </Route>

          <Route path="/color">
            <Menu />
            <NewColor />
            <Colors />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
