import React from "react";
import { requestCashAction, requestCashActionFunction } from "../actions/CashActions";
import { ICashResponse } from "../api/CashApi";
import { connect } from "react-redux";

export interface IRequestCashProps {
    requestCashAction: requestCashActionFunction;
}

interface IRequestCashState {
    cashAmount: number;
}

export class RequestCash extends React.PureComponent<IRequestCashProps,IRequestCashState> {
    constructor(props: IRequestCashProps) {
        super(props);
        this.state = {
            cashAmount: 0
        };
    }

    onCashSubmit = () => { 
        this.props.requestCashAction(this.state.cashAmount);
    }

    setCashAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            cashAmount: +event.target.value
         })  
    }

    render() {
        return (
            <div className="RequestCash">
               <form className="text-center border border-light p-5">
                    <p className="h4 mb-4">Withdraw Cash</p>
                    <input type="number" className="form-control mb-4" placeholder="Amount" onChange={this.setCashAmount} />
                    <input type="buton" className="btn btn-info my-4" onClick={this.onCashSubmit} value="Submit"/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    requestCashAction
}

export default connect(null,mapDispatchToProps)(RequestCash);