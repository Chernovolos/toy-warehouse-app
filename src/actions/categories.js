import * as ACTIONS from "../constants/types";
import serviceAPI from "../services/api";

export const categoryStart = () => ({type: ACTIONS.CATEGORY_START});
export const categorySuccess = (categoryList) => ({type: ACTIONS.CATEGORY_SUCCESS, payload: categoryList});
export const categoryError = (error) => ({type: ACTIONS.CATEGORY_ERROR, payload: error});
export const categoryFinish = () => ({type: ACTIONS.CATEGORY_FINISH});


export const getCategoryList = () => (dispatch, getState) => {
    const token = getState().login.token;
    dispatch(categoryStart());

    serviceAPI.getCategory(token)
        .then(({data}) => {
            const categories = data.categories;
            dispatch(categorySuccess(categories))
        })
        .catch((error) => {
            dispatch(categoryError(error))
        })
        .finally(() => {
            dispatch(categoryFinish())
        })
};