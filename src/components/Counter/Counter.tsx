import React from 'react';
import { IonButton, IonText } from '@ionic/react';
import './Counter.css';

const KEY = 'counter';

export default class Counter extends React.Component {
  state = {
    counter: +localStorage.getItem(KEY)! || 0,
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
