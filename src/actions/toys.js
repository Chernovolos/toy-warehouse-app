import { toastr } from "react-redux-toastr";
import * as ACTIONS from "../constants/types";
import serviceAPI from "../services/api";

export const toysStart = () => ({type: ACTIONS.TOYS_START});
export const toysSuccess = (toysList) => ({type: ACTIONS.TOYS_SUCCESS, payload: toysList});
export const toysError = (error) => ({type: ACTIONS.TOYS_ERROR, payload: error});
export const toysFinish = () => ({type: ACTIONS.TOYS_FINISH});

export const getToysList = () => (dispatch, getState) => {
    const token = getState().login.token;
    dispatch(toysStart());
    serviceAPI.getToys(token)
        .then(({data}) => {
            const toys = data.toys;
            dispatch(toysSuccess(toys));
        })
        .catch((error) => {
            dispatch(toysError(error));
            toastr.error("Error")
        })
        .finally(() => {
            dispatch(toysFinish());
        })
};

export const toyStart = () => ({type: ACTIONS.TOY_START});
export const toySuccess = (toy) => ({type: ACTIONS.TOY_SUCCESS, payload: toy});
export const toyError = (error) => ({type: ACTIONS.TOY_ERROR, payload: error});
export const toyFinish = () => ({type: ACTIONS.TOY_FINISH});

export const getToyItem = (id) => (dispatch, getState) => {
    const token = getState().login.token;
    dispatch(toyStart());
    serviceAPI.getToy(id, token)
        .then(({data}) => {
            console.log(data);
            dispatch(toySuccess(data));
        })
        .catch((error) => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
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

export const getUpdateToy = (id, toy) => (dispatch, getState) => {
    const token = getState().login.token;
    dispatch(toyUpdateStart());
    serviceAPI.updateToy(id, toy, token)
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

export const createNewIncomingTransactions = (toy, transaction) => (dispatch, getState) => {
    const token = getState().login.token;
    dispatch(transactionIncomingStart());
    serviceAPI.createToy(toy, token)
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

