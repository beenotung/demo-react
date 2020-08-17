import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import Counter from "./Counter";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <Counter step={1}/>
                    <Counter step={2}/>
                </header>
            </div>
        </Provider>
    );
}

export default App;
