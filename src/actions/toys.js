import * as ACTIONS from "../constants/types";
import serviceAPI from "../services/api";

export const toysStart = () => ({type: ACTIONS.TOYS_START});
export const toysSuccess = (toysList) => ({type: ACTIONS.TOYS_SUCCESS, payload: toysList});
export const toysError = (error) => ({type: ACTIONS.TOYS_ERROR, payload: error});
export const toysFinish = () => ({type: ACTIONS.TOYS_FINISH});

export const getToysList = () => (dispatch, getState) => {
    const token = getState().login.token;
    console.log("token-toys", token);
    dispatch(toysStart());
    serviceAPI.getToys(token)
        .then(({data}) => {
            console.log("data",data);
            const toys = data.toys;
            dispatch(toysSuccess(toys));
        })
        .catch((error) => {
            console.log('%c' + error.status, "color: red; font-size: 2em;");
            console.log(error);
            dispatch(toysError(error));
        })
        .finally(() => {
            dispatch(toysFinish());
        })
};

export const toyStart = () => ({type: ACTIONS.TOY_START});
export const toySuccess = (toy) => ({type: ACTIONS.TOY_SUCCESS, payload: toy});
export const toyError = (error) => ({type: ACTIONS.TOY_ERROR, payload: error});
export const toyFinish = () => ({type: ACTIONS.TOY_FINISH});

export const getToy = (id) => (dispatch, getState) => {
    const token = getState().login.token;
    dispatch(toyStart());
    serviceAPI.getToy(token, id)
        .then(({data}) => {
            console.log(data);
            dispatch(toySuccess(data));
        })
};

