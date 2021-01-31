import React from "react";
import { Link } from "react-router-dom";
import addbtPath from "../../img/plus1.svg";

function MainFirstContainer() {
  const logincheck = sessionStorage.getItem("logincheck");

  return (
    <section id="home-main-section-top">
      <div className="home-main-top">
        <div className="home-main-desc">
          <h1 className="home-main-title">
            당신 근처의
            <br />
            당근마켓
            {logincheck ? (
              <Link to="/post/create" className="addProduct">
                <img
                  className="fixed-add-product"
                  alt="App Store"
                  src={addbtPath}
                />
                <div>상품등록</div>
              </Link>
            ) : (
              <Link
                to="/"
                className="addProduct"
                onClick={() => alert("로그인 후 사용 가능합니다.")}
              >
                <img
                  className="fixed-add-product"
                  alt="App Store"
                  src={addbtPath}
                />
                <div>상품등록</div>
              </Link>
            )}
          </h1>

          <p className="text-m">
            중고 거래부터 동네 정보까지, 이웃과 함께 해요.
            <br />
            가깝고 따뜻한 당신의 근처를 만들어요
          </p>
        </div>
        <div className="home-main-image-top"></div>
      </div>
    </section>
  );
}

export default MainFirstContainer;
