import * as React from "react";
import * as renderer from "react-test-renderer";
import {RequestCash, IRequestCashProps } from "../src/components/RequestCash";
import { shallow } from "enzyme";

let props = {} as IRequestCashProps;

describe("Request Cash  Component", () => {
    beforeEach(() =>{
        props = {} as IRequestCashProps;
    });

    it("shoud render withdrawbanknotes component properly", () => {
        const component = renderer.create(<RequestCash {...props} />);
        const snap = component.toJSON();
        expect(snap).toMatchSnapshot();
    });

    it("shoud call request cash actions on submit", () => {
        props.requestCashAction = jest.fn();
        const wrapper = shallow(<RequestCash {...props} />);
        const button = wrapper.find(".btn-info");
        button.simulate("click");
        expect((props.requestCashAction as jest.Mock).mock.calls.length).toBe(1);
    });
})