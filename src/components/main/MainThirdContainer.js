import React from 'react';

function MainSecondContainer() {
    return (

            <section className="home-main-section background-pale-green">
                <div className="home-main-content home-main-reverse">
                    <div className="home-main-image home-main-image-02"></div>
                    <div>
                        <h1 className="home-main-title">
                            이웃과 함께 하는<br/>
                            동네 생활
                        </h1>
                        <p className="text-m">
                            우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
                        </p>
                        <ul className="home-story-list">
                            <li className="home-story-list-item">
                                <div className="icon-story icon-story-01"></div>
                                <div className="text-s text-bold mt-3 mb-2">우리동네질문</div>
                                <div className="text-xs"> 
                                    궁금한 게 있을 땐<br/>
                                    이웃에게 물어보세요.
                                </div>
                            </li>
                            <li className="home-story-list-item">
                                <div className="icon-story icon-story-02"></div>
                                <div className="text-s text-bold mt-3 mb-2">동네분실센터</div>
                                <div className="text-xs"> 
                                    무언가를 잃어버렸을 때,<br/>
                                    함께 찾을 수 있어요.
                                </div>
                            </li>
                            <li className="home-story-list-item">
                                <div className="icon-story icon-story-03"></div>
                                <div className="text-s text-bold mt-3 mb-2">동네모임</div>
                                <div className="text-xs"> 
                                    관심사가 비슷한 이웃과<br/>
                                    온오프라인으로 만나요.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </section>

    );
}

export default MainSecondContainer;