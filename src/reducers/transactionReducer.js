import * as ACTION from '../constants/types';

const initialState = {
    transactionsList: [],
    transactionsId: [],
    error: null,
    preloader: false,
};

export default (state = initialState, action) =>{
    let { type, payload } = action;

    switch (type) {
        case ACTION.TRANSACTION_START:
            return {
                ...state,
                preloader: true,
            };

        case ACTION.TRANSACTION_SUCCESS:
        case ACTION.TRANSACTION_ID_SUCCESS:
            return {
                ...state,
                preloader: false,
                transactionsList: payload,
                transactionsId: payload,
            };

        case ACTION.TRANSACTION_ERROR:
            return {
                ...state,
                preloader: false,
                transactionsList: [],
                transactionId: [],
                error: payload,
            };

        case ACTION.TRANSACTION_FINISH:
            return {
                ...state,
                preloader: false,
            };

        default:
            return {
                ...state,
            }
    }
}