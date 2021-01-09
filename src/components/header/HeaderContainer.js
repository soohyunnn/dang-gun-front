import React from 'react';
import { Link } from 'react-router-dom';
import loginPath from '../../img/login3.svg'
import joinPath from '../../img/join.svg'
import LoginContainer from '../user/LoginContainer';
import { useSelector, useDispatch } from "react-redux";
import {changloginvisible, changjoinvisible} from '../../modules/modal';

function HeaderContainer() {

    const singInUp = useSelector((state) => state.modal.singInUp);
    console.log('HeaderContainer-singInUp', singInUp)
    
    const dispatch = useDispatch();
    const showModal = (value) => {
        if(value === 1 ){
            dispatch(changloginvisible(value));
        }
        if(value === 2 ){
            dispatch(changjoinvisible(value));
        }
        
    }

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
                                <button className="login" onClick={() => showModal(1)}>
                                    <img className="fixed-apple-store" alt="App Store" src={loginPath} />
                                    <div>Login</div>
                                </button>
                                <button className="join" onClick={() => showModal(2)}>
                                    <img className="fixed-google-play" alt="Google Play" src={joinPath} />
                                    <div>Join</div>
                                </button>
                            </div>
                            <LoginContainer></LoginContainer>
                        </div>
                
                    {/* <div id="toggle-btn">Header Menu Toggle Button</div> */}
                </div>
            </header>
        </div>
    );
}

export default HeaderContainer;