import React, { Component } from "react";
import { v4 } from "uuid";
import AddColorForm from "./components/AddColorForm";
import ColorList from "./components/ColorList";
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
      <div className="App">
        <div className="App-header">
          <AddColorForm onNewColor={addColor} />
          <br></br>
          <hr></hr>
          <ColorList
            colors={colors}
            onRate={rateColor}
            onRemove={removeColor}
          />
        </div>
      </div>
    );
  }
}
export default App;
