import React from "react";
import { Link } from "react-router-dom";

function MainThirdContainer() {
  return (
    <section className="home-main-section">
      <div className="home-main-content">
        <div className="home-main-image home-main-image-01"></div>
        <div>
          <h1 className="home-main-title">
            우리동네
            <br />
            중고 직거래 마켓
          </h1>
          <p className="text-m">
            동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요
          </p>
          <div className="home-buttons">
            <Link className="home-button text-1 text-bold" to="">
              인기매물 보기
            </Link>
            <Link className="home-button text-1 text-bold ml-3" to="">
              믿을 수 있는 중고거래
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainThirdContainer;
