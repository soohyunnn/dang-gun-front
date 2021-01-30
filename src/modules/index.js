import { combineReducers } from "redux";
import modal from "./modal";
import postInputs from "./postInputs";
import loginJoinInputs from "./loginJoinInputs";
//import { persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   // localStorage에 저장합니다.
//   storage,
//   // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
//   whitelist: ["postInputs"],
//   // blacklist -> 그것만 제외합니다
// };

const rootReducer = combineReducers({
  modal,
  postInputs,
  loginJoinInputs,
});

export default rootReducer;
