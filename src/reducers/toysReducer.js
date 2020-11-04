import * as ACTION from '../constants/types';

const initialState = {
    listToys: [],
    toy: [],
    newToy: {},
    error: null,
    preloader: false,
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case ACTION.TOYS_START:
            return {
                ...state,
                preloader: true,
            };

        case ACTION.TOY_UPDATE_START:
            return {
                ...state,
                preloader: true,
            };

        case ACTION.TOYS_SUCCESS:
                return {
                    ...state,
                    preloader: false,
                    listToys: payload,
                };

        case ACTION.TOY_UPDATE_SUCCESS:
            return {
                ...state,
                preloader: false,
                toy: payload,
            };

        case ACTION.TOYS_ERROR:
            return {
                ...state,
                listToys: [],
                toy: [],
                preloader: false,
                error: payload,
            };

        case ACTION.TOYS_FINISH:
            return {
                ...state,
                preloader: false,
            };

        case ACTION.TOY_SUCCESS:
            return {
                ...state,
                preloader: false,
                toy: payload,
            };

        default:
            return {
                ...state,
            }


    }

}