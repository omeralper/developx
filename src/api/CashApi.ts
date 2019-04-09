import { CASH_POST } from "./Api";
import { IGenericResponse } from "./ApiTypes";

export interface ICashResponseEntity {
    bankNote: number;
    amount: number;
}

export interface ICashResponse extends IGenericResponse {
    result: ICashResponseEntity[]
}

export const postCashRequest = (cashAmount: number): Promise<ICashResponse> => {
    return fetch(CASH_POST,{
        body: JSON.stringify({cashAmount}),
        credentials: "same-origin",
        headers : {
            'Content-Type': "application/json"
        },
        method: "POST"
    })
    .then((response:Response) => response.json());
}
