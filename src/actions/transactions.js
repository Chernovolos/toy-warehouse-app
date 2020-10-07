import * as ACTIONS from "../constants/types";
import  {TOKEN_KEY}  from "../constants/route";
import serviceAPI from "../services/api";

export const transactionsStart = () => ({type: ACTIONS.TRANSACTION_START});
export const transactionsSuccess = (transactions) => ({type: ACTIONS.TRANSACTION_SUCCESS, payload: transactions});
export const transactionsError = (error) => ({type: ACTIONS.TRANSACTION_ERROR, payload: error});
export const transactionsFinish = () => ({type: ACTIONS.TRANSACTION_FINISH});


export const getTransactionsList = () => (dispatch) => {
    let token = localStorage.getItem(TOKEN_KEY);
    dispatch(transactionsStart);
    serviceAPI.getTransactions(token)
        .then(({data}) => {
            let {transactions} = data;
            console.log("transactions from SERVER", transactions);
            // let transactionToys = transactions.toys;
            dispatch(transactionsSuccess(transactions));
        })
        .catch((error) => {
            console.log("error", error.result);
            dispatch(transactionsError(error));
        })
        .finally(() => {
            dispatch(transactionsFinish());
        })
};

export const transactionsIdStart = () => ({type: ACTIONS.TRANSACTION_ID_START});
export const transactionsIdSuccess = (transactionsId) => ({type: ACTIONS.TRANSACTION_ID_SUCCESS, payload: transactionsId});
export const transactionsIdError = (error) => ({type: ACTIONS.TRANSACTION_ID_ERROR, payload: error});
export const transactionsIdFinish = () => ({type: ACTIONS.TRANSACTION_ID_FINISH});


export const getTransactionsIdItem = (id) => (dispatch) => {
    console.log("TransactionsIdItem from server", id);
    let token = localStorage.getItem(TOKEN_KEY);
    dispatch(transactionsIdStart());

    serviceAPI.getTransactionsId(token, id)
        .then(({data}) => {
            console.log(data)
            dispatch(transactionsIdSuccess(data));
        })
        .catch((error) => {
            dispatch(transactionsIdError(error));
        })
        .finally(() => {
            dispatch(transactionsIdFinish());
        })

};