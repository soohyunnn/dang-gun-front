import {combineReducers} from "redux";
import modal from "./modal";
import postInputs from "./postInputs";
import loginJoinInputs from "./loginJoinInputs";

const rootReducer = combineReducers({
    modal,
    postInputs,
    loginJoinInputs
});

export default rootReducer;