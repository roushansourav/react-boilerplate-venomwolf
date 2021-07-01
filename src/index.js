import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import FontFaceObserver from "fontfaceobserver";
import history from "./utils/history";
import "./index.css";
import App from "./containers/App";
import configureStore from "./configureStore";
import reportWebVitals from "./reportWebVitals";

const openSansObserver = new FontFaceObserver("Open Sans", {});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

openSansObserver.load().then(() => {
  document.body.classList.add("fontLoaded");
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
