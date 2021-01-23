import React from "react";
import FooterContainer from "../footer/FooterContainer";
import HeaderContainer from "../header/HeaderContainer";
import SlideContainer from "./SlideContainer";
import { useSelector } from "react-redux";

function DetatilContainer() {
  const post = useSelector((state) => state.postInputs.detailPost);
  //console.log("DetatilContainer", post);

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <article id="content">
        <h1 className="hide">{post.title}</h1>
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
                <div className="nickname">{post.userName}</div>
                <div className="region-name">{post.detailaddress}</div>
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
          <h1 id="article-title">{post.title}</h1>
          <p id="article-category">
            디지털/가전<time>2시간 전</time>
          </p>
          <p id="article-price">{post.price}</p>
          <div id="article-detail">
            <p>{post.content}</p>
            <p id="article-counts">{`채팅 0 ∙ 관심 ${post.likeCnt} ∙ 조회 ${post.viewCnt}`}</p>
          </div>
        </section>
      </article>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default DetatilContainer;
