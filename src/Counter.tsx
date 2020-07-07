import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "./store";
import {IAction} from "./actions";
import {Dispatch} from "redux";

const Counter: React.FC = () => {
    const theNumber = useSelector((state: IRootState) => state.theNumber)
    // const dispatch: (action: IAction) => void = useDispatch()
    const dispatch = useDispatch<Dispatch<IAction>>()
    return (
        <div>
            <h1>
                {theNumber}
            </h1>
            <button onClick={() => dispatch({type: 'add'})}>
                Add
            </button>
            {' '}
            <button onClick={() => dispatch({type: 'reset'})}>
                Reset
            </button>
        </div>
    )
}
export default Counter
