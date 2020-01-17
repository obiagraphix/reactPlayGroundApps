import React from "react";
import ReactDOM from "react-dom";
/* import { createStore, combineReducers } from "redux";
import { colors, sort } from "./Redux/Reducers";
import initialState from "./Redux/InitialState"; */
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import storeFactory from "./Redux/store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//const store = createStore(combineReducers({ colors, sort }), initialState);
const store = storeFactory(true);

store.subscribe(() =>
  console.log("color count:", store.getState().colors.length)
);

//

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};
store.subscribe(render);
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
