import React from "react";
import FooterContainer from "../footer/FooterContainer";
import HeaderContainer from "../header/HeaderContainer";
import SlideContainer from "./SlideContainer";

function DetatilContainer() {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <article id="content">
        <h1 className="hide">맥북 에어 2018 MacBook Air 2018 256기가 고급형</h1>
        <section id="article-images">
          <h3 className="hide">이미지</h3>
          <div id="image-slider">
            <SlideContainer></SlideContainer>
          </div>
        </section>
        <section id="article-profile">
          <div id="article-profile-link">
            <h3 className="hide">프로필</h3>
            <div className="space-between">
              <div id="article-profile-image">
                <img
                  alt="이이이잉"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png"
                />
              </div>
              <div id="article-profile-left">
                <div className="nickname">수혀혀혀혀닝</div>
                <div className="region-name">인천 미추홀구 도화동</div>
              </div>

              <div id="article-profile-right">
                <dl id="temperature-wrap">
                  <dt>매너온도</dt>
                  <dd className="text-color-03">
                    36.5
                    <span></span>
                  </dd>
                </dl>
                <div className="meters">
                  <div className=" bar bar-color-03"></div>
                  <div className=" face face-03"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="article-description">
          <h1 id="article-title">
            맥북 에어 2018 MacBook Air 2018 256기가 고급형
          </h1>
          <p id="article-category">
            디지털/가전<time>2시간 전</time>
          </p>
          <p id="article-price">820,000원</p>
          <div id="article-detail">
            <p>
              맥북 에어 2018 로즈골드 색상입니다. 구매하자마자 커버 씌워놓고
              거의 사용하지 않아 상태는 최상이구요, 배터리 사이클수도 95회로
              적은 편입니다. 풀박스구요 파우치 원하신다면 드릴 수 있습니다.
              직거래 희망하고 쿨거래 네고 가능합니다
            </p>
            <p id="article-counts">채팅 0 ∙ 관심 1 ∙ 조회 34</p>
          </div>
        </section>
      </article>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default DetatilContainer;
