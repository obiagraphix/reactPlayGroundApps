import React from "react";
import AddColorForm from "./components/AddColorForm";
import StarRating from "./components/StarRating";
import "./App.css";

function App() {
  /* const logColor = (title, color) => {
    console.log(`New Color: ${title} | ${color}`);
  }; */
  return (
    <div className="App">
      <header className="App-header">
        <StarRating />
        <br></br>
        <hr></hr>
        <AddColorForm
          onNewColor={(title, color) => {
            console.log(`TODO: add new ${title} and ${color} to the list`);
            console.log(`TODO: render UI with new Color`);
          }}
        />
      </header>
    </div>
  );
}

export default App;
