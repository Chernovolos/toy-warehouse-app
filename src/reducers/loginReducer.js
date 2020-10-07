import * as ACTION from '../constants/types';

const initialState = {
    user: {},
    token: null,
    isAuthorized: false,
    error: null,
    preloader: false,
    profile: "",
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case ACTION.LOGIN_START:
        case ACTION.LOGIN_PAGE_INITIALIZE_START:
            return {
                ...state,
                preloader: true,
            };

        case ACTION.LOGIN_SUCCESS:
            return {
                ...state,
                preloader: false,
                user: payload,
            };

        case ACTION.SET_TOKEN:
            return {
                ...state,
                preloader: false,
                token: payload,
                isAuthorized: true,
            };

        case ACTION.LOGIN_ERROR:
        case ACTION.LOGOUT:
            return {
                ...state,
                preloader: false,
                user: null,
                token: null,
                isAuthorized: false,
            };



        // case ACTION.LOGIN_PAGE_INITIALIZE_START:
        //     return {
        //         ...state,
        //         preloader: true,
        //     };

        case ACTION.LOGIN_PAGE_INITIALIZE_FINISH:
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