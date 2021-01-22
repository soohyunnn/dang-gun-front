import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { selectAllPostAPI } from "../../axios";
import DetatilContainer from "../detail/DetatilContainer";

function MainFifthContainer() {
  const [postList, setPostList] = useState();

  useEffect(() => {
    selectAllPostAPI("/posts").then((response) => {
      //console.log("selectAllPostAPI-Res", response.data);
      setPostList(response.data);
    });
  }, []);

  console.log("postList", postList);
  return (
    <>
      <section className="home-main-section background-gray">
        <div className="home-hot-content">
          <h1 className="home-main-title text-center home-hot-title">
            중고거래 인기매물
          </h1>
          <div className="cards-wrap">
            {postList !== undefined &&
              postList.map((post) => (
                <article className="card-top" key={post.id}>
                  <Link
                    className="card-link"
                    to={`/posts/${post.id}`}
                    key={post.id}
                  >
                    <div className="card-photo ">
                      <img
                        alt="맥북 에어 2018 MacBook Air 2018 256기가 고급형"
                        src="https://dang-gun-project.s3.ap-northeast-2.amazonaws.com/static/%E1%84%8F%E1%85%A1%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A9.jpeg2021-01-19T22%3A18%3A57.029"
                      />
                    </div>
                    <div className="card-desc">
                      <h2 className="card-title">{post.title}</h2>
                      <div className="card-price">{post.price}</div>
                      <div className="card-region-name">
                        {post.detailaddress}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
          </div>
          <div class="text-center">
            <Link
              className="text-bold text-black text-m view-more"
              to="/detail"
            >
              인기매물 더 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainFifthContainer;
