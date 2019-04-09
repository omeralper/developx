import React from "react";
import RequestCash from "./components/RequestCash";
import WithdrawBankNotes from "./components/WithdrawBankNotes";

export class Home extends React.PureComponent<{}> {
    constructor(props:any) {
        super(props);
    }
   
    render() {
        return (
            <div className="Home">
                <RequestCash />
                <WithdrawBankNotes />
            </div>
        )
    }
}
   