import React from 'react';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonCol,
  IonRow,
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
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Shopping from './components/Shopping/Shopping';

function Card(props: { title: string; children: any }) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{props.children}</IonCardContent>
    </IonCard>
  );
}

class App extends React.Component {
  render() {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Introduce Redux</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
              <IonCardTitle>Running on React</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <Card title="Shared props">
            <Shopping />
          </Card>
          <Card title="Hooks with DOM event">
            <IonRow>
              <IonCol>
                <Logo />
              </IonCol>
              <IonCol>
                <Logo />
              </IonCol>
            </IonRow>
          </Card>
          <Card title="setState with window event">
            <IonRow>
              <IonCol>
                <Counter />
              </IonCol>
              <IonCol>
                <Counter />
              </IonCol>
            </IonRow>
          </Card>
          <Card title="Using Redux">
            <IonRow>
              <IonCol>
                <ScoreBoard teamName="Team L" />
              </IonCol>
              <IonCol>
                <ScoreBoard teamName="Team R" />
              </IonCol>
            </IonRow>
          </Card>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
