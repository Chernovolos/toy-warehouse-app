import * as ACTIONS from "../constants/types";
import serviceAPI from "../services/api";
import {TOKEN_KEY} from "../constants/route";

export const toysStart = () => ({type: ACTIONS.TOYS_START});
export const toysSuccess = (toysList) => ({type: ACTIONS.TOYS_SUCCESS, payload: toysList});
export const toysError = (error) => ({type: ACTIONS.TOYS_ERROR, payload: error});
export const toysFinish = () => ({type: ACTIONS.TOYS_FINISH});

export const getToysList = () => (dispatch) => {
    let token = localStorage.getItem(TOKEN_KEY);
    console.log("token-toys", token);
    dispatch(toysStart());
    serviceAPI.getToys(token)
        .then(({data}) => {
            console.log("data getToysList",data);
            const toys = data.toys;
            dispatch(toysSuccess(toys));
        })
        .catch((error) => {
            if(error.response.status === 404){
               dispatch(toysError(error));
            }
            // console.log('%c' + error.status, "color: red; font-size: 2em;");
            // console.log(error);
            // dispatch(toysError(error));
        })
        .finally(() => {
            dispatch(toysFinish());
        })
};

export const toyStart = () => ({type: ACTIONS.TOY_START});
export const toySuccess = (toy) => ({type: ACTIONS.TOY_SUCCESS, payload: toy});
export const toyError = (error) => ({type: ACTIONS.TOY_ERROR, payload: error});
export const toyFinish = () => ({type: ACTIONS.TOY_FINISH});

export const getToy = (id) => (dispatch) => {
    let token = localStorage.getItem(TOKEN_KEY);
    dispatch(toyStart());
    serviceAPI.getToy(token, id)
        .then(({data}) => {
            console.log(data);
            dispatch(toySuccess(data));
        })
        .catch((error) => {
            dispatch(toyError(error));
        })
        .finally(() => {
            dispatch(toyFinish());
        })
};

export const toyUpdateStart = () => ({type: ACTIONS.TOY_UPDATE_START});
export const toyUpdateSuccess = (toy) => ({type: ACTIONS.TOY_UPDATE_SUCCESS, payload: toy});
export const toyUpdateError = (error) => ({type: ACTIONS.TOY_UPDATE_ERROR, payload: error});
export const toyUpdateFinish = () => ({type: ACTIONS.TOY_UPDATE_FINISH});

export const getUpdateToy = (id, toy) => (dispatch) => {
    let token = localStorage.getItem(TOKEN_KEY);
    dispatch(toyUpdateStart());
    serviceAPI.updateToy(token, id, toy)
        .then(({data}) => {
            console.log(data);
            dispatch(toyUpdateSuccess(data));
        })
        .catch((error) => {
            dispatch(toyUpdateError(error));
        })
        .finally(() => {
            dispatch(toyUpdateFinish());
        })
};

export const transactionIncomingStart = () => ({type: ACTIONS.TRANSACTION_INCOMING_START});
export const transactionIncomingSuccess = (toy) => ({type: ACTIONS.TRANSACTION_INCOMING_SUCCESS, payload: toy});
export const transactionIncomingError = (error) => ({type: ACTIONS.TRANSACTION_INCOMING_ERROR, payload: error});
export const transactionIncomingFinish = () => ({type: ACTIONS.TRANSACTION_INCOMING_FINISH});

export const createNewIncomingTransactions = (toy, transaction) => (dispatch) => {
    let token = localStorage.getItem(TOKEN_KEY);
    dispatch(transactionIncomingStart());
    serviceAPI.createToy(token, toy)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            dispatch(transactionIncomingError(error));
        })
        .finally(() => {
            dispatch(transactionIncomingFinish());
        })
};

// return serviceAPI.createTransactions(token, transaction)
//     .then((response) => {
//         console.log(response);
//         dispatch(transactionIncomingSuccess(toy, transaction));
//     })

