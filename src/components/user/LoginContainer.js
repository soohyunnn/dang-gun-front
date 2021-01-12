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
import { addUserAPI, selectUserAPI } from "../../axios";
import xbutton from "../../img/xbutton.png";
import DaumPostcode from "react-daum-postcode";

function LoginContainer() {
  const singInUp = useSelector((state) => state.modal.singInUp);
  const { login, join } = useSelector((state) => state.loginJoinInputs);

  console.log("LoginContainer-singInUp", singInUp);
  console.log("LoginContainer-login", login);
  console.log("LoginContainer-join", join);

  const dispatch = useDispatch();
  const showModal = (value) => {
    if (value === 0) {
      dispatch(closemodal(value));
      dispatch(joinvaluereset());
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

    dispatch(opendaumpost("addressnumber", zoneCodes));
    dispatch(opendaumpost("detailaddress", fullAddress));

    // document.getElementById('detailaddress').value = fullAddress
    // document.getElementById('detailaddress').value = fullAddress
    dispatch(opendaumpost("isDaumPost", false));

    console.log("fullAddress", fullAddress);
    console.log("zoneCodes", zoneCodes);
  };

  //밸리데이션 값 체크
  const valisation = (value) => {
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var email = login.email;
    var password = login.password;

    var email1 = join.email;
    var password1 = join.password;
    var username = join.username;
    var addressnumber = join.addressnumber;
    var detailaddress = join.detailaddress;
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
      if (document.getElementById("warringmsg").textContent === "") {
        document.getElementById("warringmsg").textContent =
          "중복확인을 하세요.";
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

  const onCLickLoginUser = () => {
    if (valisation(0)) {
      dispatch(loginUser(login));
    }
  };

  const onCLickAddUser = () => {
    if (valisation(1)) {
      addUserAPI("/users/singup", join).then(function (response) {
        console.log("addUser-Res", response);
      });
      //DB 전송 후 input값 초기화
      dispatch(addUser(join));
      dispatch(closemodal(0));
      dispatch(joinvaluereset());
      alert("회원가입이 완료되었습니다.");
    }
  };

  const onClickSelectUser = () => {
    selectUserAPI("/users/selectedUser", join.email).then(function (response) {
      console.log("selectUser-res", response);
      if (response.data.length === 0) {
        console.log("X");
        document.getElementById("warringmsg").textContent =
          "사용가능한 Email 입니다.";
      } else {
        console.log("O");
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
          value={join.email}
        ></input>
        <input
          id="password"
          name="password"
          className={singInUp === 2 ? "join-input" : ""}
          placeholder="패스워드"
          onChange={onLoginChange}
          value={join.password}
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
              id="addressnumber"
              name="addressnumber"
              placeholder="5자리"
              onChange={onJoinChange}
              value={join.addressnumber}
            ></input>{" "}
            <button onClick={handleOpenPost}>우편번호</button>
          </div>
          <input
            id="detailaddress"
            name="detailaddress"
            className={singInUp !== 2 ? "join-input" : ""}
            placeholder="상세주소"
            onChange={onJoinChange}
            value={join.detailaddress}
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
