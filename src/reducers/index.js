import { combineReducers} from "redux";
import toysReducer from "./toysReducer";
import loginReducer from "./loginReducer";
import categoryReducer from "./categoryReducer";
import transactionReducer from "./transactionReducer";
import {reducer as toastrReducer} from "react-redux-toastr";


export default combineReducers({
    toysReducer,
    login: loginReducer,
    categoryReducer: categoryReducer,
    transactions: transactionReducer,
    toastr: toastrReducer,
});