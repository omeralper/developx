import React from "react";
import { ICashResponseEntity } from "../api/CashApi";
import { connect } from "react-redux";
import { ICashReducerState } from "../reducers/CashReducer";

export interface IWithdrawBankNotesProps {
    withdrawMoneySet: ICashResponseEntity[],
    notAvailable: boolean
}

export const WithdrawBankNotes: React.StatelessComponent<IWithdrawBankNotesProps> = ({
    withdrawMoneySet,
    notAvailable
}) => {
    return (
        <div className="WithdrawBankNotes">
         {notAvailable ? "Not Available" : 
            <ul>
                {withdrawMoneySet.map((cashEntity, i) => (
                    <li key={i}>Bank note {cashEntity.bankNote} - Amount  {cashEntity.amount}</li>
                ))}
            </ul>
         }
        </div>
    );
}

const mapStateToProps = ({withdrawMoneySet,notAvailable}: ICashReducerState) => ({
    withdrawMoneySet,
    notAvailable
})

export default connect(mapStateToProps)(WithdrawBankNotes);