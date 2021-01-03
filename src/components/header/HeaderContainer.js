import React from 'react';
import { Link } from 'react-router-dom';

function HeaderContainer() {
    return (
        <div>
            <header className="section">
                <div className="inner">
                    <div className="menu-group">
                        <div className="logo">
                            <Link to="/">
                                <span class="sr-only">당근마켓</span>
                                <img class="fixed-logo" alt="당근마켓" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"></img>
                            </Link>
                        </div>
                            <div className="search-input-wrap">
                                <input className="search" type="text" placeholder="동네 이름,물품명 등을 검색해보세요!"/>
                                <a>
                                    <img class="fixed-search-icon" alt="Search" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg" />
                                </a>                            
                            </div>
                            <div className="Appdownload">
                                <a className="AppStore">
                                    <img className="fixed-apple-store" alt="App Store" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/apple-store-3a664174124650d63cae365bc55586fc5ff27b822b1b97788fc4af77d73d00c8.svg" />
                                    <div>App Store</div>
                                </a>
                                <a className="GooglePlay">
                                    <img className="fixed-google-play" alt="Google Play" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/google-play-c9ad0fc573cd01e2b982df5de6709a3d8d7cec8d9b58a5c08db7da0b92a32a75.svg" />
                                    <div>Google Play</div>
                                </a>
                            </div>
                        </div>
                
                    {/* <div id="toggle-btn">Header Menu Toggle Button</div> */}
                </div>
            </header>
        </div>
    );
}

export default HeaderContainer;