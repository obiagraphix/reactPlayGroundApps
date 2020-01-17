import React from "react";
import AddColorForm from "./components/AddColorForm";
import ColorList from "./components/ColorList";
import MemberList from "./components/MemberList";
import HiddenMessages from "./components/HiddenMessages";
import { Nav, Navbar } from "react-bootstrap";
import CountryList from "./components/CountryList";
import SortMenu from "./components/Menu/SortMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
            <SortMenu store={store} />
            <AddColorForm store={store} />
            <ColorList store={store} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
