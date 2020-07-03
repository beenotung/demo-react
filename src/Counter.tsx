import React from 'react';
import { IonButton } from '@ionic/react';

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    return [
      <p>Counter: {this.state.counter}</p>,
      < IonButton onClick={() => this.increment()}>Increment</IonButton>, 
    ];
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
