const INPUT_LOGIN_CHANGE = "loginJoinInputs/INPUT_LOGIN_CHANGE";
const INPUT_JOIN_CHANGE = "loginJoinInputs/INPUT_JOIN_CHANGE";
const ADD_USER = "loginJoinInputs/ADD_USER";
const LOGIN_USER = "loginJoinInputs/LOGIN_USER";
const OPEN_DAUM_POST = "loginJoinInputs/OPEN_DAUM_POST";
const JOIN_VALUE_RESET = "loginJoinInputs/JOIN_VALUE_RESET";

export const inputloginchange = (name, value) => ({
  type: INPUT_LOGIN_CHANGE,
  name,
  value,
});
export const inputjoinchange = (name, value) => ({
  type: INPUT_JOIN_CHANGE,
  name,
  value,
});
export const addUser = (user) => ({ type: ADD_USER, user });
export const loginUser = (user) => ({ type: LOGIN_USER, user });
export const opendaumpost = (name, value) => ({
  type: OPEN_DAUM_POST,
  name,
  value,
});
export const joinvaluereset = () => ({ type: JOIN_VALUE_RESET });

const initialState = {
  login: {
    email: "",
    password: "",
    logincheck: false,
  },
  join: {
    email: "",
    username: "",
    password: "",
    addressNumber: "",
    detailAddress: "",
    isDaumPost: false,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_LOGIN_CHANGE:
      return {
        ...state,
        login: {
          ...state.login,
          [action.name]: action.value,
        },
      };
    case INPUT_JOIN_CHANGE:
      return {
        ...state,
        join: {
          ...state.join,
          [action.name]: action.value,
        },
      };
    case ADD_USER:
      return {
        ...state,
        join: initialState.join,
      };
    case LOGIN_USER: {
      return {
        ...state,
        login: {
          ...initialState.login,
          logincheck: true,
        },
      };
    }
    case OPEN_DAUM_POST: {
      console.log("OPEN_DAUM_POST", action.name, "::", action.value);
      return {
        ...state,
        join: {
          ...state.join,
          [action.name]: action.value,
        },
      };
    }
    case JOIN_VALUE_RESET: {
      return {
        ...state,
        join: {
          ...initialState.join,
        },
      };
    }
    default:
      return state;
  }
}
