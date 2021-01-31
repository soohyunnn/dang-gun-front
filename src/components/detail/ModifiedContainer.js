import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputdetailchange, uploadimage } from "../../modules/postInputs";
import { updatePostAPI } from "../../axios";
import FooterContainer from "../footer/FooterContainer";
import HeaderContainer from "../header/HeaderContainer";

function ModifiedContainer() {
  const post = useSelector((state) => state.postInputs.detailPost);
  //console.log("id", detailPost.id);
  //const updatePost = useSelector((state) => state.postInputs.post);

  const file = useSelector((state) => state.postInputs.file);
  console.log("ModifiedContainer-post", post);
  //console.log("ModifiedContainer-updatePost", updatePost);

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
    console.log(e.target.value);
    const { name, value } = e.target;
    dispatch(inputdetailchange(name, value));
  };

  const onClickUpdatePost = () => {
    const updatePost = {};

    updatePost.userEmail = sessionStorage.getItem("email"); //TODO: 세션 ID 넣기
    //post.user.username = "admin"; //TODO: 세션 닉네임 넣기
    console.log("post", post);
    updatePost.postId = post.id;
    updatePost.title = post.title;
    updatePost.price = post.price;
    updatePost.content = post.content;
    console.log("updatePost", updatePost);
    let formData1 = new FormData();
    formData1.append("post", JSON.stringify(updatePost));
    for (let i = 0; i < file.length; i++) {
      formData1.append("file", file[i]);
    }
    if (validation()) {
      updatePostAPI("/posts", formData1).then((response) => {
        console.log("updatePostAPI-Res", response.status);
        alert("게시글 수정이 완료되었습니다.");
        window.history.go(-1);
      });
    }
  };

  // useEffect(() => {
  //   selectOnePostAPI(`/posts/${id}`, id).then((response) => {
  //     console.log("selectOnePostAPI-Res", response.data);
  //     dispatch(savedetailpost(response.data));
  //   });
  // });

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <article id="content">
        <form method="POST" enctype="multipart/form-data">
          <section id="add-post">
            <h1 className="add-post-title">게시글 수정</h1>
            <input
              className="title"
              name="title"
              type="text"
              placeholder="제목을 입력해 주세요."
              onChange={onChange}
              defaultValue={post.title}
            />
            <input
              className="price"
              name="price"
              type="number"
              placeholder="금액을 입력해 주세요.(숫자만 입력가능)"
              onChange={onChange}
              defaultValue={post.price}
            />
            <textarea
              className="content"
              name="content"
              placeholder="내용을 입력하세요."
              onChange={onChange}
              defaultValue={post.content}
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
              <button
                type="button"
                className="add_button"
                onClick={onClickUpdatePost}
              >
                수정
              </button>
            </div>
          </section>
        </form>
      </article>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default ModifiedContainer;
