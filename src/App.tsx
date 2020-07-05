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
          <Card title="Functional Component (Hooks)">
            <IonRow>
              <IonCol><Logo/></IonCol>
              <IonCol><Logo/></IonCol>
            </IonRow>
          </Card>
          <Card title="Class Component (setState)">
            <IonRow>
              <IonCol>
                <Counter />
              </IonCol>
              <IonCol>
                <Counter />
              </IonCol>
            </IonRow>
          </Card>
          <Card title="Score Board">
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
