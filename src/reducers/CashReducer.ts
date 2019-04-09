import { ACTIONS } from "../actions/ActionsTypes";
import { ICashResponseEntity } from "../api/CashApi";

export interface ICashReducerState {
    withdrawMoneySet: ICashResponseEntity[],
    notAvailable: boolean
}

const initialState: ICashReducerState = {
    withdrawMoneySet: [],
    notAvailable: false
}

export const cashReducer = (state: ICashReducerState = initialState, action: any) => {
    switch(action.type) {
        case ACTIONS.CASH_FETCH_WITHDRAW_REQUEST : {
            return {...state};
        }
        case ACTIONS.CASH_FETCH_WITHDRAW_SUCCESS : {
            return {...state, withdrawMoneySet: action.withdrawMoneySet , notAvailable:false};
        }
        case ACTIONS.CASH_FETCH_WITHDRAW_FAIL : {
            return {...state, notAvailable: true};
        }
        default: 
            return {...state};
    }
}