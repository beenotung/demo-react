import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

class App extends React.Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
              <IonCardTitle>Running on React</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className='App-logo-container'>
                <img src={logo} className="App-logo" alt="ionic logo" />
                The logo path: {logo}
              </div>
              <p>Counter: {this.state.counter}</p>
              <IonButton onClick={() => this.increment()}>Increment</IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default App;
