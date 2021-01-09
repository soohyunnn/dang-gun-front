import React from 'react';
import {useSelector, useDispatch } from "react-redux";
import {inputloginchange, inputjoinchange, addUser, loginUser} from "../../modules/loginJoinInputs";
import {closemodal} from '../../modules/modal';
import xbutton from '../../img/xbutton.png'

function LoginContainer() {

    const singInUp = useSelector((state) => state.modal.singInUp);
    const {login, join} = useSelector((state) => state.loginJoinInputs);
    console.log('LoginContainer-singInUp', singInUp);
    console.log('LoginContainer-login', login);
    console.log('LoginContainer-join', join);
    

    const dispatch = useDispatch();
    const showModal = (value) => {
      if(value === 0 ){
        dispatch(closemodal(value));
      }
      
    }

    const onLoginChange = (e) => {
      const {name, value} = e.target
      dispatch(inputloginchange(name, value));
    }

    const onJoinChange = (e) => {
      const {name, value} = e.target;
      dispatch(inputjoinchange(name, value));
    }

    const onCLickLoginUser = () => {

      dispatch(loginUser(login));
    }

    const onCLickAddUser = () => {

      //DB 전송 후 input값 초기화
      dispatch(addUser(join));
    }

    return (
        <div className={singInUp === 0 ? 'modal-wrapper-none' : 'modal-wrapper'}>
          <div className="login-modal">
            <div className="close-wrapper">
              <button onClick={() => showModal(0)}>
                <img src={xbutton}></img>
              </button>
            </div>
            
            <p className="modal-title">{singInUp === 1 ? "로그인" : "회원가입"}</p>

            <input name="id" className={singInUp === 2 ? 'join-input' : ''} placeholder="이메일" onChange={onLoginChange}></input>
            <input name="password" className={singInUp === 2 ? 'join-input' : ''} placeholder="패스워드" onChange={onLoginChange}></input>

            <input name="id" className={singInUp !== 2 ? 'join-input' : ''} placeholder="이메일" onChange={onJoinChange}></input>
            <input name="username" className={singInUp !== 2 ? 'join-input' : ''} placeholder="닉네임" onChange={onJoinChange}></input>
            <input name="password" className={singInUp !== 2 ? 'join-input' : ''} placeholder="패스워드" onChange={onJoinChange}></input>
            <input name="address" className={singInUp !== 2 ? 'join-input' : ''} placeholder="주소" onChange={onJoinChange}></input>

            <div className="Self">
              <span className={singInUp === 1 ? 'StylelessButton-ActionButton' : 'join-input'}>
                <button onClick={onCLickLoginUser}>로그인</button>
              </span>
              <span className={singInUp !== 1 ? 'StylelessButton-ActionButton' : 'join-input'}>
                <button onClick={onCLickAddUser}>회원가입</button>
              </span>
            </div>
            {/* <div className="Self">
              <button
                className="StylelessButton-ActionButton"
                name="google"
              >
                Continue with Google
              </button>
            </div>
            <div className="Self">
              <button
                className="StylelessButton-ActionButton"
                name="github"
              >
                Continue with Github
              </button>
            </div> */}

            {/* <p>
              {props ? "계정이있어요!" : "계정이 없으신가요?"}
              <span onClick={() => onClickSignUp(!props)}>
                {props ? "로그인" : "회원가입"}
              </span>
            </p> */}
          </div>
        </div>
    );
}

export default LoginContainer;