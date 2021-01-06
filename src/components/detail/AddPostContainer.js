import React from 'react';
import FooterContainer from '../footer/FooterContainer';
import HeaderContainer from '../header/HeaderContainer';
import SlideContainer from './SlideContainer';

function AddPostContainer() {
    return (
        <>
            <HeaderContainer></HeaderContainer>
            <article id="content">
                
                <form>              
                    <section id="add-post">
                        <h1 className="add-post-title">게시글 등록</h1>
                        <input className="title" type="text" placeholder="제목을 입력해 주세요."/>
                        <input className="price" type="text" placeholder="금액을 입력해 주세요."/>
                        <textarea className="content" placeholder="내용을 입력하세요."></textarea>
                        <div className="upload-btn-wrapper">
                            
                            <button className="btn">Upload a file</button>
                            <input type="file" name="myfile" />
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