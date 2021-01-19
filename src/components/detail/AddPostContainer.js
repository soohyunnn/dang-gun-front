import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputchange, uploadimage } from "../../modules/postInputs";
import { createPostAPI } from "../../axios";
import FooterContainer from "../footer/FooterContainer";
import HeaderContainer from "../header/HeaderContainer";

function AddPostContainer() {
  const post = useSelector((state) => state.postInputs.post);
  const file = useSelector((state) => state.postInputs.file);
  console.log("AddPostContainer", post);
  console.log("AddPostContainer", file);
  let fileObj = "";
  for (let i = 0; i < file.length; i++) {
    fileObj += file[i].name + ". ";
  }

  const dispatch = useDispatch();

  //밸리데이션 값 체크
  const validation = () => {
    let title = post.title;
    let content = post.content;
    let price = post.price;

    if (title === "") {
      alert("제목을 입력해주세요.");
      return false;
    }
    if (price === "") {
      alert("금액을 입력해주세요.");
      return false;
    }
    if (content === "") {
      alert("내용을 입력해주세요.");
      return false;
    }
    return true;
  };

  const fileupload = (e) => {
    dispatch(uploadimage(e.target.files));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(inputchange(name, value));
  };

  const createPost = () => {
    post.user.id = 5; //TODO: 세션 ID 넣기
    post.user.username = "admin"; //TODO: 세션 닉네임 넣기
    let formData1 = new FormData();
    formData1.append("title", post.title);
    formData1.append("content", post.content);
    formData1.append("price", post.price);
    formData1.append("userID", post.user.id);
    formData1.append("userName", post.user.username);
    for (let i = 0; i < file.length; i++) {
      formData1.append("file", file[i]);
    }
    if (validation()) {
      createPostAPI("/boards", formData1).then((response) => {
        console.log("createPost-Res", response.status);
        alert("게시글 등록이 완료되었습니다.");
      });
    }
  };

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <article id="content">
        <form method="POST" enctype="multipart/form-data">
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
              type="number"
              placeholder="금액을 입력해 주세요.(숫자만 입력가능)"
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
                  id="filename"
                  value={fileObj !== "" ? fileObj : "이미지를 업로드 해주세요."}
                  disabled
                ></input>
                <button className={fileObj !== "" ? "" : "delete-button"}>
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
