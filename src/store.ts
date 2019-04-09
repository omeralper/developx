import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { cashReducer, ICashReducerState } from './reducers/CashReducer';


//const cashMachineApp = combineReducers(cashReducer);

let store = createStore(
    cashReducer, 
    applyMiddleware(thunk));

export default store;

export interface IStoreState {
    cash: ICashReducerState
}

export type IGetState = () => IStoreState;