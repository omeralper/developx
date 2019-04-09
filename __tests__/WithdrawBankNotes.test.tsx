import * as React from "react";
import * as renderer from "react-test-renderer";
import {WithdrawBankNotes, IWithdrawBankNotesProps } from "../src/components/WithdrawBankNotes";
import { shallow } from "enzyme";

let props = {} as IWithdrawBankNotesProps;

describe("Withdraw Bank Notes Component", () => {
    beforeEach(() =>{
        props = {} as IWithdrawBankNotesProps;
    });

    it("shoud render withdrawbanknotes component properly", () => {
        props.withdrawMoneySet = [];
        const component = renderer.create(<WithdrawBankNotes {...props} />);
        const snap = component.toJSON();
        expect(snap).toMatchSnapshot();
    });

    it("shoud render 2 list item for 250 ", () => {
        props.withdrawMoneySet =  [
                {
                    bankNote : 100,
                    amount: 2
                },
                {
                    bankNote : 50,
                    amount: 1
                }
            ];
        const wrapper = shallow(<WithdrawBankNotes {...props}/>);
        const listItems = wrapper.find('li');
        expect(listItems.length).toBe(2);
    });
})