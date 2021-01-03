import React from 'react';

function FooterContainer() {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo"></div>
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <a className="link-highlight">믿을 수 있는 중고거래</a>
                        </li>
                        <li className="footer-list-item">
                            <a className="link-highlight">자주 묻는 질문</a>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <a>회사 소개</a>
                        </li>
                        <li className="footer-list-item">
                            <a className="link-highlight">광고주센터</a>
                        </li>
                        <li className="footer-list-item">
                            <a>동네가게</a>
                        </li>
                    </ul>
                    <ul className="footer-list policy">
                        <li className="footer-list-item">
                            <a>이용약관</a>
                        </li>
                        <li className="footer-list-item">
                            <a>개인정보처리방침</a>
                        </li>
                        <li className="footer-list-item">
                            <a>위치기반서비스 이용약관</a>
                        </li>
                    </ul>
                </div>
                
                <div className="footer-bottom">
                    <div id="copyright">
                        <ul className="copyright-list">
                            <li className="copyright-list-item">
                                고객문의&nbsp;
                                <a>sksmsqodn20@google.com</a>
                            </li>
                            <li className="copyright-list-item">
                                제휴문의&nbsp;
                                <a>sksmsqodn20@google.com</a>
                            </li>
                        </ul>
                        <ul className="copyright-list">
                            <li className="copyright-list-item">
                                지역광고&nbsp;
                                <a>sksmsqodn20@google.com</a>
                            </li>
                            <li className="copyright-list-item">
                                PR문의&nbsp;
                                <a>sksmsqodn20@google.com</a>
                            </li>
                        </ul>
                        <ul className="copyright-list copyright-list-light">
                            <li className="copyright-list-item">
                                사업자 등록번호 : 111-11-11111
                                
                            </li>
                            <li className="copyright-list-item">
                                <address>경기도 하남시 망월동</address>
                            </li>
                        </ul>
                        <div class="copyright-text">©Danggeun Market Inc.</div>
                    </div>
                    <div id="social">
                        <ul className="social-list">
                            <li className="social-list-item">
                                <a className="footer-social-link">
                                    <img alt="facebook" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-facebook-0563f4a93852d073b41f13b8bcabb03d47af3bb3a6755cdfedd8a73686c7f18c.svg" />
                                    <span className="sr-only">facebook</span>
                                </a>
                            </li>
                            <li className="social-list-item">
                                <a className="footer-social-link">
                                <img alt="instagram" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-instagram-2f6c88a461597907c114b7ce28eab053fcae791ed26417915fefb6f7c9f95756.svg" />
                                    <span className="sr-only">instagram</span>
                                </a>
                            </li>
                            <li className="social-list-item">
                                <a className="footer-social-link">
                                <img alt="blog" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-blog-e1b0d512d1766a6962ec5bbb5b0803d2a6a9c55ad97db5ba9eebb76013caceba.svg" />
                                    <span className="sr-only">blog</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterContainer;