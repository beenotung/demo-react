import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { IonButton } from '@ionic/react';
import store from './store';
import { RootState } from './store';
import { Lose, Win } from './actions';
import './ScoreBoard.css';

function selectBoardState(state: RootState) {
  return state.scoreboard;
}
export interface ScoreBoardProps {
  teamName: string;
}

const ScoreBoard = (props: ScoreBoardProps) => {
  const state = useSelector(selectBoardState);
  const dispatch = useDispatch();
  return (
    <div className="ScoreBoard">
      <p>Team Name: {props.teamName}</p>
      <p>
        Score: <span className="score">{state.score}</span>
      </p>
      <IonButton color="danger" onClick={() => dispatch(Lose())}>
        Lose
      </IonButton>
      <IonButton color="success" onClick={() => dispatch(Win())}>
        Win
      </IonButton>
    </div>
  );
};

export default (props: ScoreBoardProps) => {
  return (
    <Provider store={store}>
      <ScoreBoard {...props} />
    </Provider>
  );
};
