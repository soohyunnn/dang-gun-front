import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  inputloginchange,
  inputjoinchange,
  addUser,
  loginUser,
  opendaumpost,
  joinvaluereset,
} from "../../modules/loginJoinInputs";
import { closemodal } from "../../modules/modal";
import { addUserAPI, selectUserAPI, loginUserAPI } from "../../axios";
import xbutton from "../../img/xbutton.png";
import DaumPostcode from "react-daum-postcode";

function LoginContainer() {
  const singInUp = useSelector((state) => state.modal.singInUp);
  const { login, join } = useSelector((state) => state.loginJoinInputs);

  const dispatch = useDispatch();
  const showModal = (value) => {
    if (value === 0) {
      dispatch(closemodal(value));
      dispatch(joinvaluereset());
      document.getElementById("warringmsg").textContent = "";
    }
  };

  //주소 팝업
  const postCodeStyle = {
    width: "134%",
    position: "absolute",
    top: "59px",
  };
  const handleOpenPost = () => {
    dispatch(opendaumpost("isDaumPost", true));
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let zoneCodes = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? `${extraAddress})` : "";
    }

    dispatch(opendaumpost("addressNumber", zoneCodes));
    dispatch(opendaumpost("detailAddress", fullAddress));
    dispatch(opendaumpost("isDaumPost", false));
  };

  //밸리데이션 값 체크
  const validation = (value) => {
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let email = login.email;
    let password = login.password;

    let email1 = join.email;
    let password1 = join.password;
    let username = join.username;
    let addressnumber = join.addressnumber;
    let detailaddress = join.detailaddress;
    console.log(
      "email1 : ",
      email1,
      " password : ",
      password,
      " username :",
      username,
      "addressnumber : ",
      addressnumber
    );
    if (value === 0) {
      console.log("Login 밸리데이션 체크");
      if (email === "") {
        alert("이메일을 입력해주세요.");
        return false;
      }
      if (!regExp.test(email)) {
        alert("이메일 형식으로 입력해주세요.");
        return false;
      }
      if (password === "") {
        alert("비밀번호를 입력해주세요.");
        return false;
      }
    }
    if (value === 1) {
      console.log("join 밸리데이션 체크");
      if (email1 === "") {
        alert("이메일을 입력해주세요.");
        return false;
      }
      if (!regExp.test(email1)) {
        alert("이메일 형식으로 입력해주세요.");
        return false;
      }
      if (username === "") {
        alert("닉네임을 입력해주세요.");
        return false;
      }
      if (password1 === "") {
        alert("비밀번호를 입력해주세요.");
        return false;
      }
      if (addressnumber === "") {
        alert("우편번호를 입력해주세요.");
        return false;
      }
      if (detailaddress === "") {
        alert("상세주소를 입력해주세요.");
        return false;
      }
    }
    return true;
  };

  const onLoginChange = (e) => {
    const { name, value } = e.target;
    dispatch(inputloginchange(name, value));
  };

  const onJoinChange = (e) => {
    const { name, value } = e.target;
    dispatch(inputjoinchange(name, value));
  };

  //토근정보랑 유저아이디를 logalStorage에 저장
  const registerSuccessFulLoginForJwt = (username, token) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("authenticatedUser", username);
  };

  //로그인
  const onCLickLoginUser = () => {
    if (validation(0)) {
      loginUserAPI("/authenticate", login)
        .then(function (response) {
          const token = response.data.token;
          registerSuccessFulLoginForJwt(login.email, token);
          dispatch(loginUser(login));
          sessionStorage.setItem("email", login.email);
          sessionStorage.setItem("logincheck", true);
          window.location.replace("/");
        })
        .catch((err) => {
          alert("아이디 비밀번호가 일치하지 않습니다.");
        });
    }
  };

  //회원가입
  const onCLickAddUser = () => {
    if (validation(1)) {
      addUserAPI("/users/signup", join)
        .then(function (response) {
          //DB 전송 후 input값 초기화
          dispatch(addUser(join));
          dispatch(closemodal(0));
          dispatch(joinvaluereset());
          document.getElementById("warringmsg").textContent = "";
          alert("회원가입이 완료되었습니다.");
        })
        .catch((err) => {
          alert("회원가입에 실패하였습니다.");
        });
    }
  };

  const onClickSelectUser = () => {
    selectUserAPI("/users", join.email).then(function (response) {
      if (response.data === false) {
        document.getElementById("warringmsg").textContent =
          "사용가능한 Email 입니다.";
      } else {
        document.getElementById("warringmsg").textContent =
          "이미 사용중인 Email 입니다.";
      }
    });
  };

  return (
    <div className={singInUp === 0 ? "modal-wrapper-none" : "modal-wrapper"}>
      <div className="login-modal">
        <div className="close-wrapper">
          <button onClick={() => showModal(0)}>
            <img alt="닫기버튼" src={xbutton}></img>
          </button>
        </div>

        <p className="modal-title">{singInUp === 1 ? "로그인" : "회원가입"}</p>

        <input
          id="email"
          name="email"
          className={singInUp === 2 ? "join-input" : ""}
          placeholder="이메일"
          onChange={onLoginChange}
          value={login.email}
        ></input>
        <input
          id="password"
          name="password"
          className={singInUp === 2 ? "join-input" : ""}
          placeholder="패스워드"
          onChange={onLoginChange}
          value={login.password}
        ></input>
        <input
          id="email"
          name="email"
          className={singInUp !== 2 ? "join-input" : ""}
          placeholder="이메일"
          onChange={onJoinChange}
          value={join.email}
        ></input>
        <div className={singInUp !== 2 ? "join-input" : "IdCheckButton"}>
          <p id="warringmsg"></p>
          <button onClick={onClickSelectUser}>중복 확인</button>
        </div>
        <input
          id="username"
          name="username"
          className={singInUp !== 2 ? "join-input" : ""}
          placeholder="닉네임"
          onChange={onJoinChange}
          value={join.username}
        ></input>
        <input
          id="password"
          name="password"
          className={singInUp !== 2 ? "join-input" : ""}
          placeholder="패스워드"
          onChange={onJoinChange}
          value={join.password}
        ></input>
        <div className="address-inputs">
          <div className="search-address">
            <input
              className={singInUp !== 2 ? "join-input" : ""}
              id="addressnumber"
              name="addressnumber"
              placeholder="5자리"
              onChange={onJoinChange}
              value={join.addressNumber}
            ></input>{" "}
            <button
              className={singInUp !== 2 ? "join-input" : ""}
              onClick={handleOpenPost}
            >
              우편번호
            </button>
          </div>
          <input
            id="detailaddress"
            name="detailaddress"
            className={singInUp !== 2 ? "join-input" : ""}
            placeholder="상세주소"
            onChange={onJoinChange}
            value={join.detailAddress}
          ></input>
        </div>
        <div className="Self">
          <span
            className={
              singInUp === 1 ? "StylelessButton-ActionButton" : "join-input"
            }
          >
            <button onClick={onCLickLoginUser}>로그인</button>
          </span>
          <span
            className={
              singInUp !== 1 ? "StylelessButton-ActionButton" : "join-input"
            }
          >
            <button onClick={onCLickAddUser}>회원가입</button>
          </span>
        </div>
        {join.isDaumPost ? (
          <DaumPostcode
            onComplete={handleComplete}
            style={postCodeStyle}
          ></DaumPostcode>
        ) : null}
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
