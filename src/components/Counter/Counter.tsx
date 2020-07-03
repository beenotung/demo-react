import React from 'react';
import { IonButton, IonText } from '@ionic/react';
import './Counter.css';

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div className="Counter">
        <IonButton onClick={() => this.decrement()}>+</IonButton>
        <IonText>{this.state.counter}</IonText>
        <IonButton onClick={() => this.increment()}>-</IonButton>
      </div>
    );
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
