import { toastr } from "react-redux-toastr";
import * as ACTIONS from "../constants/types";
import  {TOKEN_KEY}  from "../constants/route";
import serviceAPI from "../services/api";

// delete
// export const setProfile = (token) => ({type: ACTIONS.SET_PROFILE, payload: token});
export const loginStart = () => ({type: ACTIONS.LOGIN_START});
export const loginSuccess = (user) => ({type: ACTIONS.LOGIN_SUCCESS , payload: user});
export const setToken = (token) => ({type: ACTIONS.SET_TOKEN , payload: token});
export const loginError = (error) => ({type: ACTIONS.LOGIN_ERROR, payload: error});
export const loginFinish = () => ({type: ACTIONS.LOGIN_FINISH});
export const loginPageInitializeStart = () => ({type: ACTIONS.LOGIN_PAGE_INITIALIZE_START});
export const loginPageInitializeFinish =() => ({type: ACTIONS.LOGIN_PAGE_INITIALIZE_FINISH});

// attempt to restore session
export const initializeLayoutPage = () => (dispatch, getState) => {
    // let token = getState().login.token;
    let token = localStorage.getItem("TOKEN");
    // console.log("token",token);
    // turn on side effects
    dispatch(loginPageInitializeStart());
    // check if there are any token in localStorage
    if(token) {
        // make test request to check if token works(not expired)
        serviceAPI.profileUser(token)
            // if request performed well, then token works
            .then(({data}) => {
                // set working token to store
                dispatch(setToken(token));
            })
            .catch((error) => {
                // console.log(error);
                dispatch(loginError(error));
                toastr.error("Error", "You are not unauthorized, check your password or email.")
            })
    }
    // turn off side effects
    dispatch(loginPageInitializeFinish());
};

export const loginUser = (user) => (dispatch) => {
    dispatch(loginStart());
    dispatch(loginSuccess(user));
    serviceAPI.login(user)
        .then(({data}) => {
            let token = data.accessToken;
            localStorage.setItem(TOKEN_KEY, token);
            dispatch(setToken(token));
        })
        .catch((error) => {
            if (isTokenExpired(error)) {
                // logout to make user authorize one more time
                logOut();
                // localStorage.removeItem("TOKEN");
                toastr.error("Error", "You are not unauthorized, check your password or email.")
            }
            dispatch(loginError(error));
        })
        .finally(() => {
            dispatch(loginFinish());
        });
};

function isTokenExpired(error) {
    if(error.response) {
        return error.response.status === 401;
    } else return false;
}

export const logOut = () => {
    localStorage.getItem("TOKEN");
    localStorage.removeItem("TOKEN");
    return {
        type: ACTIONS.LOGOUT
    }
};
