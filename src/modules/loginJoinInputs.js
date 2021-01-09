const INPUT_LOGIN_CHANGE = "loginJoinInputs/INPUT_LOGIN_CHANGE";
const INPUT_JOIN_CHANGE = "loginJoinInputs/INPUT_JOIN_CHANGE";
const ADD_USER = "loginJoinInputs/ADD_USER";
const LOGIN_USER = "loginJoinInputs/LOGIN_USER";

export const inputloginchange = (name, value) => ({type: INPUT_LOGIN_CHANGE, name, value});
export const inputjoinchange = (name, value) => ({type: INPUT_JOIN_CHANGE, name, value});
export const addUser = (user) =>({type: ADD_USER, user});
export const loginUser = (user) => ({type: LOGIN_USER, user});

const initialState = {
    login : {
        id: "",
        password: "",
        logincheck: false
    },
    join : {
        id:"",
        username: "",
        password: "",
        address:""
    }
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case INPUT_LOGIN_CHANGE :
            console.log('INPUT_LOGIN_CHANGE', action.name, '::',action.value);
            console.log('login',state.login)
            return {
                ...state,
                login : {
                    ...state.login,
                    [action.name] : action.value
                }
            }
        case INPUT_JOIN_CHANGE :
            console.log('INPUT_JOIN_CHANGE', action.name, '::',action.value);
            console.log('join',state.join)
            return {
                ...state,
                join : {
                    ...state.join,
                    [action.name] : action.value
                }
            }
        case ADD_USER :
            console.log('ADD_USER', action.user);
            return {
                ...state,
                join : initialState.join

            }
        case LOGIN_USER : {
            console.log('LOGIN_USER', action.user);
            return {
                ...state, 
                login : {
                    ...initialState.login,
                    logincheck: true
                }
            }
        }
        default :
            return state;
    }
}