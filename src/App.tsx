import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { IRootState } from "./store";
import { Dispatch } from "redux";
import { IAction } from "./actions";

function LoginFormFC() {
  let [isOpen, setIsOpen] = useState(true);
  let loginTitle = "sales";
  return (
    <div>
      <h1>
        class: {loginTitle == "sales" ? "big" : ""}
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
        Login to {loginTitle} system
      </h1>
      {isOpen && (
        <>
          {loginTitle == "engine" ||
            (loginTitle == "sales" && <h3>morning</h3>)}
          <p>
            <input placeholder="username" />
          </p>
          <p>
            <input placeholder="password" />
          </p>
          <p>
            <input type="submit" />
          </p>
        </>
      )}
    </div>
  );
}

function LoginFormRC() {
  let state = useSelector((state: IRootState) => state);
  const dispatch = useDispatch<Dispatch<IAction>>();
  let { isOpen, loginTitle } = state;
  function toggle() {
    if (isOpen) {
      dispatch({ type: "close" });
    } else {
      dispatch({ type: "open" });
    }
  }
  return (
    <div>
      <h1>
        class: {loginTitle == "sales" ? "big" : ""}
        <button onClick={toggle}>{isOpen ? "-" : "+"}</button>
        Login to {loginTitle} system
      </h1>
      {isOpen && (
        <>
          {loginTitle == "engine" ||
            (loginTitle == "sales" && <h3>morning</h3>)}
          <p>
            <input placeholder="username" />
          </p>
          <p>
            <input placeholder="password" />
          </p>
          <p>
            <input type="submit" />
          </p>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <LoginFormRC />
          <LoginFormRC />
        </header>
      </div>
    </Provider>
  );
}

export default App;
