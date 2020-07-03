import React from 'react';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
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
import Logo from './components/Logo/Logo';
import Counter from './components/Counter/Counter';

class App extends React.Component {
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
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Logo</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <Logo />
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Counter</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <Counter />
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
