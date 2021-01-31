const LOGIN_VISUBLE = "modal/LOGIN_JOIN_VISUBLE";
const JOIN_VISUBLE = "modal/JOIN_VISUBLE";
const CLOSE_MODAL = "modal/CLOSE_MODAL";

export const changloginvisible = (singInUp) => ({
  type: LOGIN_VISUBLE,
  singInUp,
});
export const changjoinvisible = (singInUp) => ({
  type: JOIN_VISUBLE,
  singInUp,
});
export const closemodal = (singInUp) => ({ type: CLOSE_MODAL, singInUp });

const initialState = {
  modalVisible: false,
  singInUp: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_VISUBLE:
      return {
        ...state,
        singInUp: action.singInUp,
      };
    case JOIN_VISUBLE:
      return {
        ...state,
        singInUp: action.singInUp,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        singInUp: action.singInUp,
      };
    default:
      return state;
  }
}
