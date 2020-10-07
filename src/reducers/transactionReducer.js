import * as ACTION from '../constants/types';

const initialState = {
    transactionsList: [],
    transaction: null,
    error: null,
    preloader: false,
};

export default (state = initialState, action) =>{
    let { type, payload } = action;

    switch (type) {
        case ACTION.TRANSACTIONS_LIST_START:
            return {
                ...state,
                preloader: true,
            };

        case ACTION.TRANSACTIONS_LIST_SUCCESS:
            return {
                ...state,
                preloader: false,
                transactionsList: payload
            };

        case ACTION.TRANSACTION_START:
            return {
                ...state,
                preloader: true,
            };

        case ACTION.TRANSACTION_SUCCESS:
            return {
                ...state,
                preloader: false,
                transaction: payload
            };

        case ACTION.TRANSACTIONS_LIST_ERROR:
            return {
                ...state,
                preloader: false,
                transactionsList: [],
                error: payload,
            };

        case ACTION.TRANSACTION_ERROR:
            return {
                ...state,
                preloader: false,
                transaction: null,
                error: payload,
            };

        case ACTION.TRANSACTIONS_LIST_FINISH:
            return {
                ...state,
                preloader: false,
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