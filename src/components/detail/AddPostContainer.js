import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputchange } from "../../modules/postInputs";
import { createPostAPI } from "../../axios";
import FooterContainer from "../footer/FooterContainer";
import HeaderContainer from "../header/HeaderContainer";

function AddPostContainer() {
  const post = useSelector((state) => state.postInputs.post);
  console.log("AddPostContainer", post);

  const dispatch = useDispatch();

  const [uploadname, setUploadName] = useState(null);

  const fileupload = () => {
    let fileObj = document.getElementById("myfile").files[0].name;
    setUploadName(fileObj);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(inputchange(name, value));
  };

  const createPost = () => {
    post.userId.id = 7; //TODO: 세션 ID 넣기
    post.userId.username = "test1234"; //TODO: 세션 닉네임 넣기
    createPostAPI("/boards", post).then(function (response) {
      console.log("createPost-Res", response);
    });
  };

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <article id="content">
        <form>
          <section id="add-post">
            <h1 className="add-post-title">게시글 등록</h1>
            <input
              className="title"
              name="title"
              type="text"
              placeholder="제목을 입력해 주세요."
              onChange={onChange}
              value={post.title}
            />
            <input
              className="price"
              name="price"
              type="text"
              placeholder="금액을 입력해 주세요."
              onChange={onChange}
              value={post.price}
            />
            <textarea
              className="content"
              name="content"
              placeholder="내용을 입력하세요."
              onChange={onChange}
              value={post.content}
            ></textarea>
            <div className="upload-btn-wrapper">
              <div className="upload-name">
                <input
                  value={
                    uploadname != null
                      ? uploadname
                      : "이미지를 업로드 해주세요."
                  }
                  disabled
                ></input>
                <button className={uploadname != null ? "" : "delete-button"}>
                  X
                </button>
              </div>
              <button className="btn">Upload a file</button>
              <input
                type="file"
                id="myfile"
                className="file-hidden"
                multiple
                onChange={fileupload}
              />
            </div>
            <div>
              <button type="button" className="add_button" onClick={createPost}>
                등록
              </button>
            </div>
          </section>
        </form>
      </article>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default AddPostContainer;
