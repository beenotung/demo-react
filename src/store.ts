import {Action, createStore} from "redux";
import {IAction} from "./actions";

export interface IRootState {
    theNumber: number
}

const initialState: IRootState = {
    theNumber: 0
}

const rootReducer = (state: IRootState = initialState, action: IAction): IRootState => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                theNumber: state.theNumber + action.amount
            }
        case "reset":
            return {
                ...state,
                theNumber: 0
            }
        default:
            return state
    }
}

export default createStore<IRootState, Action<IAction>, {}, {}>(rootReducer as any)
