import * as ACTIONS from "../constants/types";
import serviceAPI from "../services/api";
import {toastr} from "react-redux-toastr";

export const categoriesStart = () => ({type: ACTIONS.CATEGORIES_START});
export const categoriesSuccess = (categoryList) => ({type: ACTIONS.CATEGORIES_SUCCESS, payload: categoryList});
export const categoriesError = (error) => ({type: ACTIONS.CATEGORIES_ERROR, payload: error});
export const categoriesFinish = () => ({type: ACTIONS.CATEGORIES_FINISH});

export const getCategoryList = () => (dispatch, getState) => {
    const token = getState().login.token;
    dispatch(categoriesStart());
    serviceAPI.getCategories(token)
        .then(({data}) => {
            const categories = data.categories;
            dispatch(categoriesSuccess(categories))
        })
        .catch((error) => {
            dispatch(categoriesError(error))
        })
        .finally(() => {
            dispatch(categoriesFinish())
        })
};

export const addNewCategory = () => ({type: ACTIONS.ADD_NEW_CATEGORY});

export const createNewCategory = (newCategory) => (dispatch, getState) => {
    const token = getState().login.token;
    serviceAPI.createCategory(newCategory, token)
        .then(({data}) => {
            dispatch(addNewCategory(data));
            getCategoryList()(dispatch, getState);
            toastr.success("Error", "you not Unauthorized");
        })
};
export const deleteItemCategory = (deletedCategory) => ({type: ACTIONS.DELETE_CATEGORY, payload: deletedCategory});

export const removeCategory = (id) => (dispatch, getState) => {
    const token = getState().login.token;
    serviceAPI.deleteCategory(id, token)
        .then(({data}) => {
            console.log("deleteCategory from server", data);
            dispatch(deleteItemCategory(data));
            getCategoryList()(dispatch, getState);
        })
        .catch((error) => {
            console.log(error)
        })
};

export const editCategoryStart = () => ({type: ACTIONS.EDIT_CATEGORY_START});
export const editCategorySuccess = (editCategory) => ({type: ACTIONS.EDIT_CATEGORY_SUCCESS, payload: editCategory});
export const editCategoryError = (error) => ({type: ACTIONS.EDIT_CATEGORY_ERROR, payload: error});
export const editCategoryFinish = () => ({type: ACTIONS.EDIT_CATEGORY_FINISH});

export const updateCategory = (id, category) => (dispatch, getState) => {
    const token = getState().login.token;
    dispatch(editCategoryStart());
    serviceAPI.changeCategory(id, token, category)
        .then(({data}) => {

            dispatch(editCategorySuccess(data));
            getCategoryList()(dispatch, getState);
        })
        .catch((error) => {
            dispatch(editCategoryError(error));
        })
        .finally(() => {
            dispatch(editCategoryFinish());
        })
};
export const categoryStart = () => ({type: ACTIONS.CATEGORY_START});
export const categorySuccess = (category) => ({type: ACTIONS.CATEGORY_SUCCESS, payload: category});
export const categoryError = (error) => ({type: ACTIONS.CATEGORY_ERROR, payload: error});
export const categoryFinish = () => ({type: ACTIONS.CATEGORY_FINISH});

export const getCategoryItem = (id) => (dispatch, getState) => {
    const token = getState().login.token;
    dispatch(categoryStart());
    serviceAPI.getCategory(id, token)
        .then(({data}) => {
            dispatch(categorySuccess(data));
        })
        .catch((error) => {
            dispatch(categoryError(error));
        })
        .finally(() => {
            dispatch(categoryFinish());
        })
};