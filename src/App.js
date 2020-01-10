import d3 from "d3";
import React, { Component } from "react";
import { v4 } from "uuid";
import AddColorForm from "./components/AddColorForm";
import ColorList from "./components/ColorList";
import MemberList from "./components/MemberList";
import HiddenMessages from "./components/HiddenMessages";
import { Nav, Navbar } from "react-bootstrap";
import CountryList from "./components/CountryList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    colors: []
  };

  addColor = (title, color) => {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ];
    this.setState({ colors });
  };

  rateColor = (id, rating) => {
    const colors = this.state.colors.map(color =>
      color.id !== id
        ? color
        : {
            ...color,
            rating
          }
    );
    this.setState({ colors });
  };

  removeColor = id => {
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({ colors });
  };

  render() {
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;
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
              <AddColorForm onNewColor={addColor} />
              <ColorList
                colors={colors}
                onRate={rateColor}
                onRemove={removeColor}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
