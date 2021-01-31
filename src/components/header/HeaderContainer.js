import React from "react";
import { Link } from "react-router-dom";
import loginPath from "../../img/login3.svg";
import joinPath from "../../img/join.svg";
import LoginContainer from "../user/LoginContainer";
import { useDispatch } from "react-redux";
import { changloginvisible, changjoinvisible } from "../../modules/modal";

function HeaderContainer() {
  const logincheck = sessionStorage.getItem("logincheck");
  const email = sessionStorage.getItem("email");
  console.log("HeaderContainer-email", email);

  const dispatch = useDispatch();
  const showModal = (value) => {
    if (value === 1) {
      dispatch(changloginvisible(value));
    }
    if (value === 2) {
      dispatch(changjoinvisible(value));
    }
  };

  //로그아웃시 모든 쿠키 삭제
  const logout = () => {
    console.log("login");
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("logincheck");
    window.location.replace("/");
  };

  return (
    <div>
      <header className="section">
        <div className="inner">
          <div className="menu-group">
            <div className="logo">
              <Link to="/">
                <span className="sr-only">당근마켓</span>
                <img
                  className="fixed-logo"
                  alt="당근마켓"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
                ></img>
              </Link>
            </div>
            <div className="search-input-wrap">
              <input
                className="search"
                type="text"
                placeholder="동네 이름,물품명 등을 검색해보세요!"
              />
              <Link to="">
                <img
                  className="fixed-search-icon"
                  alt="Search"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"
                />
              </Link>
            </div>

            <div className="Appdownload">
              {!logincheck ? (
                <button className="login" onClick={() => showModal(1)}>
                  <img
                    className="fixed-apple-store"
                    alt="App Store"
                    src={loginPath}
                  />
                  <div>Login</div>
                </button>
              ) : (
                <button className="logout" onClick={() => logout()}>
                  <img
                    className="fixed-apple-store"
                    alt="App Store"
                    src={loginPath}
                  />
                  <div>Logout</div>
                </button>
              )}

              <button className="join" onClick={() => showModal(2)}>
                <img
                  className="fixed-google-play"
                  alt="Google Play"
                  src={joinPath}
                />
                <div>Join</div>
              </button>
            </div>
            <LoginContainer></LoginContainer>
          </div>

          {/* <div id="toggle-btn">Header Menu Toggle Button</div> */}
        </div>
      </header>
    </div>
  );
}

export default HeaderContainer;
