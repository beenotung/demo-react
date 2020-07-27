import { Action, createStore } from "redux";
import { IAction } from "./actions";

export interface IRootState {
  loginTitle: string;
  isOpen: boolean;
}

const initialState: IRootState = {
  loginTitle: "sales",
  isOpen: false,
};

const rootReducer = (
  state: IRootState = initialState,
  action: IAction
): IRootState => {
  switch (action.type) {
    case "open":
      return { ...state, isOpen: true };
    case "close":
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export default createStore<IRootState, Action<IAction>, {}, {}>(
  rootReducer as any
);
