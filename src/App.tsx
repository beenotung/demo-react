import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { connect, Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { IRootState } from "./store";
import { Dispatch } from "redux";
import { IAction, open, close } from "./actions";

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
      dispatch(close());
    } else {
      dispatch(open());
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

class LoginFormCC extends React.Component<
  {
    loginTitle: string;
    isOpen: boolean;
  } & { open: typeof open; close: typeof close }
> {
  toggle = () => {
    if (this.props.isOpen) {
      this.props.close();
    } else {
      this.props.open();
    }
  };
  render() {
    let { loginTitle, isOpen } = this.props;
    return (
      <div>
        <h1>
          class: {loginTitle == "sales" ? "big" : ""}
          <button onClick={this.toggle}>{isOpen ? "-" : "+"}</button>
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
}
let ConnectedLoginFormCC = connect((state: IRootState) => state, {
  open,
  close,
})(LoginFormCC);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <ConnectedLoginFormCC />
          <ConnectedLoginFormCC />
        </header>
      </div>
    </Provider>
  );
}

export default App;
