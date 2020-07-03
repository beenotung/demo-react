import { createStore } from 'redux';
import { RootAction } from './actions';

export type ScoreBoardState = {
  score: number;
};

const initScoreBoardState: ScoreBoardState = {
  score: 0,
};

export type RootState = {
  scoreboard: ScoreBoardState;
};

const initRootState: RootState = {
  scoreboard: initScoreBoardState,
};

const scoreBoardReducer = (
  state: RootState = initRootState,
  action: RootAction,
): RootState => {
  switch (action.type) {
    case 'win':
      return {
        scoreboard: {
          score: state.scoreboard.score + 1,
        },
      };
    case 'lose':
      return {
        scoreboard: {
          score: state.scoreboard.score - 1,
        },
      };
    default:
      return state;
  }
};

const rootStore = createStore<RootState, RootAction, {}, {}>(scoreBoardReducer);

export default rootStore;
