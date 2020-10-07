import * as ACTION from '../constants/types';

const initialState = {
    listToys: [],
    error: null
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case ACTION.GET_TOYS_START:
            console.log('GET_TOYS_START')
            return {
                ...state,
            };

        case ACTION.GET_TOYS_SUCCESS:
                return {
                    ...state,
                    listToys: payload.list,
                };

        case ACTION.GET_TOYS_ERROR:
            return {
                ...state,
                error: payload.error,
            };

        default:
            return {
                ...state,
            }


    }

}