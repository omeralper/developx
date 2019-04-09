import { postCashRequest, ICashResponse } from "../api/CashApi";
import { Dispatch } from "react";
import { ACTIONS } from "./ActionsTypes";

export type requestCashActionFunction = (cashAmount: number) => Promise<void>;

const entitleCashRequest = () => ({
    type: ACTIONS.CASH_FETCH_WITHDRAW_REQUEST
})

const entitleCashSuccess = (response:ICashResponse) => ({
    type: ACTIONS.CASH_FETCH_WITHDRAW_SUCCESS,
    withdrawMoneySet: response.result
})

const entitleCashFail = () => ({
    type: ACTIONS.CASH_FETCH_WITHDRAW_FAIL
})

export const requestCashAction = (cashAmount: number) => 
 async (dispatch:Dispatch<any>) => {
    dispatch(entitleCashRequest());
        const response = await postCashRequest(cashAmount);

        if(response.error)
            dispatch(entitleCashFail());
        else
            dispatch(entitleCashSuccess(response));
}
