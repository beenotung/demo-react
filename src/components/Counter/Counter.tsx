import React from 'react';
import { IonButton, IonText } from '@ionic/react';
import './Counter.css';

const KEY = 'counter';

function loadCounter() {
  return +localStorage.getItem(KEY)! || 0;
}

export default class Counter extends React.Component {
  state = {
    counter: loadCounter(),
  };

  handleUpdate = (event: StorageEvent) => {
    console.log(event);
    this.setState({
      counter: loadCounter(),
    });
  };


  render() {
    return (
      <div className="Counter">
        <IonButton onClick={() => this.decrement()}>-</IonButton>
        <IonText>{this.state.counter}</IonText>
        <IonButton onClick={() => this.increment()}>+</IonButton>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('storage', this.handleUpdate);
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.handleUpdate);
  }

  componentDidUpdate() {
    localStorage.setItem(KEY, this.state.counter.toString());
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
}
