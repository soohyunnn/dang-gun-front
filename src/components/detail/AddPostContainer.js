import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addpost, inputchange } from "../../modules/postInputs";
import FooterContainer from "../footer/FooterContainer";
import HeaderContainer from "../header/HeaderContainer";

function AddPostContainer() {
  const post = useSelector((state) => state.postInputs.post);
  console.log("AddPostContainer", post);

  const dispatch = useDispatch();

  const addPost = (value) => {
    dispatch(addPost(value));
  };

  const [uploadname, setUploadName] = useState(null);
  console.log("start", uploadname);

  const fileupload = () => {
    console.log("파일 바꼈다!!");
    let fileObj = document.getElementById("myfile").files[0].name;
    console.log("fileObj", fileObj);
    setUploadName(fileObj);
    console.log("change", uploadname);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    //console.log('name',name);
    dispatch(inputchange(name, value));
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
            />
            <input
              className="price"
              name="price"
              type="text"
              placeholder="금액을 입력해 주세요."
              onChange={onChange}
            />
            <textarea
              className="content"
              name="content"
              placeholder="내용을 입력하세요."
              onChange={onChange}
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
              <button className="add_button">등록</button>
            </div>
          </section>
        </form>
      </article>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default AddPostContainer;
