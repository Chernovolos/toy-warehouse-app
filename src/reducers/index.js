import { combineReducers} from "redux";
import toysReducer from "./toysReducer";
import loginReducer from "./loginReducer";
import categoryReducer from "./categoryReducer";
import transactionReducer from "./transactionReducer";

export default combineReducers({
    toys: toysReducer,
    login: loginReducer,
    categoryReducer: categoryReducer,
    transactions: transactionReducer,
});