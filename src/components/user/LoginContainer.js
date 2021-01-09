import React from 'react';
import {useSelector, useDispatch } from "react-redux";
import {closemodal} from '../../modules/modal';
import xbutton from '../../img/xbutton.png'

function LoginContainer() {

    const singInUp = useSelector((state) => state.singInUp);
    console.log('LoginContainer-singInUp', singInUp)

    const dispatch = useDispatch();
    const showModal = (value) => {
      if(value === 0 ){
        dispatch(closemodal(value));
      }
      
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

            <input placeholder="이메일"></input>
            <input className={singInUp !== 2 ? 'join-input' : ''} placeholder="닉네임"></input>
            <input placeholder="패스워드"></input>
            <input className={singInUp !== 2 ? 'join-input' : ''} placeholder="주소"></input>

            <div className="Self">
              <span className="StylelessButton-ActionButton">
                {singInUp === 1 ? "로그인" : "회원가입"}
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