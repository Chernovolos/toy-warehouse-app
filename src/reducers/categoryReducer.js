import * as ACTIONS from "../constants/types";

const initialState = {
    categoryList: [],
    newCategory: {},
    category: {},
    error: null,
    preloader: false,
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case ACTIONS.CATEGORIES_START:
            return {
                ...state,
                preloader: true,
            };

        case ACTIONS.CATEGORIES_SUCCESS:
            return {
                ...state,
                preloader: false,
                categoryList: payload,
            };

        case ACTIONS.ADD_NEW_CATEGORY:
            return {
                ...state,
                newCategory: {...payload},
            };

        case ACTIONS.CATEGORY_SUCCESS:
            return {
                ...state,
                category: payload,
            };

        // case ACTIONS.EDIT_CATEGORY_SUCCESS:
        //     return {
        //         ...state,
        //
        //     };

        case ACTIONS.DELETE_CATEGORY:
            return {
                ...state,
                // categoryList: state.categoryList.filter((category) => category !== payload),
            };

        case ACTIONS.CATEGORIES_ERROR:
            return {
                ...state,
                preloader: false,
                categoryList: [],
                error: payload,
            };

        case ACTIONS.CATEGORIES_FINISH:
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