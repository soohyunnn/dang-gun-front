import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectAllPostAPI } from "../../axios";

function MainFifthContainer() {
  const [postList, setPostList] = useState();

  useEffect(() => {
    selectAllPostAPI("/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);

  return (
    <>
      <section className="home-main-section background-gray">
        <div className="home-hot-content">
          <h1 className="home-main-title text-center home-hot-title">
            중고거래 인기 매물
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
                        src={post.path}
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
          <div className="text-center">
            <Link
              className="text-bol-d text-black text-m view-more"
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
