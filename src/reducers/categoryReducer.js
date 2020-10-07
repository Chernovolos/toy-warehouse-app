import * as ACTIONS from "../constants/types";

const initialState = {
  categoryList: [],
  error: null,
  preloader: false,
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case ACTIONS.CATEGORY_START:
            return {
                ...state,
                error: null,
                preloader: true,
            };

        case ACTIONS.CATEGORY_SUCCESS:
            return {
                ...state,
                preloader: false,
                categoryList: payload,
            };

        case ACTIONS.CATEGORY_ERROR:
            return {
                ...state,
                preloader: false,
                categoryList: [],
                error: payload,
            };

        case ACTIONS.CATEGORY_FINISH:
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