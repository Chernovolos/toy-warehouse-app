import * as ACTIONS from "../constants/types";
import serviceAPI from "../services/api";

export const transactionsListStart = () => ({type: ACTIONS.TRANSACTIONS_LIST_START});
export const transactionsListSuccess = (transactions) => ({type: ACTIONS.TRANSACTIONS_LIST_SUCCESS, payload: transactions});
export const transactionsListError = (error) => ({type: ACTIONS.TRANSACTIONS_LIST_ERROR, payload: error});
export const transactionsListFinish = () => ({type: ACTIONS.TRANSACTIONS_LIST_FINISH});


export const getTransactionsList = () => (dispatch, getState) => {
    const token = getState().login.token;
    dispatch(transactionsListStart());
    serviceAPI.getTransactions(token)
        .then(({data}) => {
            let {transactions} = data;
            dispatch(transactionsListSuccess(transactions));
        })
        .catch((error) => {
            console.log("error", error.result);
            dispatch(transactionsListError(error));
        })
        .finally(() => {
            dispatch(transactionsListFinish());
        })
};

export const getTransactionStart = () => ({type: ACTIONS.TRANSACTION_START});
export const getTransactionSuccess = (transactionsId) => ({type: ACTIONS.TRANSACTION_SUCCESS, payload: transactionsId});
export const getTransactionError = (error) => ({type: ACTIONS.TRANSACTION_ERROR, payload: error});
export const getTransactionFinish = () => ({type: ACTIONS.TRANSACTION_FINISH});


export const getTransactionItem = (id) => (dispatch, getState) => {
    const token = getState().login.token;
    dispatch(getTransactionStart());

    serviceAPI.getTransaction(id, token)
        .then(({data}) => {
            dispatch(getTransactionSuccess(data));
        })
        .catch((error) => {
            dispatch(getTransactionError(error));
        })
        .finally(() => {
            dispatch(getTransactionFinish());
        })

};