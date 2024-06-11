import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useOnClickOutsite from '../hooks/useOnClickOutsite';
import { IoLogoOctocat } from "react-icons/io";
import { PiCatThin } from "react-icons/pi";
import { PiCatFill } from "react-icons/pi";
import { BiSolidCat } from "react-icons/bi";
import AuthContext from '../AuthContext';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import app from '../firebase';


const initialUserData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')):{}


const Nav = () => {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

    const auth = getAuth(app)

    const [userData, setUserData] = useState(initialUserData)


    useEffect(() => {
        setShowInput(false);
        // setIsLoggedIn(false)
    }, []);

    const handleLogin = () => {
        navigate('/');
        // setIsLoggedIn(true); // 로그인 상태를 true로 설정
    }

    const handleSignUp = () => {
        // setIsLoggedIn(false)
        navigate('/signup');
    }

    const handleInput = (e) => {
        setInputValue(true);
        setInputValue(e.target.value);
        console.log(inputValue);
        navigate(`/search?영화제목=${e.target.value}`);
    }

    const handleClick = () =>{
        setShowInput((prev) => !(prev));
        setInputValue("")
    }

    const handleLogout = () => {
        
        signOut(auth)
        .then(() => {
            // 로그아웃ㅅ에 성공하면 setUserData 상태 배우기
            setUserData({})
            localStorage.removeItem('userData')
            setIsLoggedIn(false) // 로그인 (구글, 이메일) 둘다 auth(= getAuth(app))으로 사용하므로 로그아웃기능도 둘다 가능! => 로그인 상태 false로 둘다 설정 가능!! & 완전히 로그아웃 후에 상태 변화 및 페이지 이동시키기!
            setShowInput(false)
            navigate('/')
        }).catch((error) => {
            alert(error.message)
        })
        // setIsLoggedIn(false) 여기서 이 코드를 실행하면, 아직 완전히 auth가 로그아웃 되지 않은 상태(즉, setIsLoggedIn === true 인 상태)에서 false로 만들어 버리니까 nav의 상태가 안 변하고, refresh되어야 변함.
       
    }
    
    const handleMain = () => {
        if(isLoggedIn === true ) {
            // (window.location.href = '/main')
            navigate('/main')
        }
        else if(isLoggedIn === false) {
            // (window.location.href = '/')
            navigate('/')
        }
    }
    const handleMypage = () => {
        navigate('/mypage')
    }


    return (
        <Div>
            <Logo>
                <Img
                        alt="logo"
                        src="/public/images/juju.jpeg"
                        onClick={handleMain}
                />
            </Logo>


            {showInput === true && (
            <Input 
                type='text'
                placeholder='검색하세요.' 
                value={inputValue}   
                onChange={handleInput} 
            />
            )}
            <Div2>
             

            {/* 로그인 상태에 따라 버튼 렌더링 */}
            {/* {isLoggedIn ? <Login>로그아웃</Login> : (
                
                   <>
                    <Login onClick={handleLogin}>로그인</Login>
                    <Login onClick={handleSignUp}>회원가입</Login>
                    </>
            )} */}
             {isLoggedIn ? 
                <> 
                    <Span>
                        <IoLogoOctocat size='30px' onClick={handleClick}/>
                    </Span>
                    
                        <Span>
                            <SignOut>
                            <BiSolidCat size='30px'/>
                            <DropDown>
                                <p onClick={handleLogout}>
                                    SignOut
                                </p>
                                <p onClick={handleMypage}>
                                    MyPage
                                </p>
                            </DropDown>
                            </SignOut>
                            
                        </Span> 
                  
                    
                </>
                
                            :(
                    <>
                    {/* <Login onClick={handleGoogle}>Google Login</Login> */}
                    <Login onClick={handleLogin}>Login</Login>
                    <Login onClick={handleSignUp}>Sign Up</Login>
                    </>
            )}

        </Div2>

        </Div>
    );
}

export default Nav;



const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border : 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
            background-color:rgb(255, 151, 205);
        }
    }
`

const Span = styled.span`
    margin-top: 6px;
    margin-right: 10px;
`;

const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    background-color: pink;
    border-radius: 50px;
    z-index: 1000;
`;

const Div2 = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;
    gap: 10px; 
    @media (max-width: 768px) {
        // a {
        //     display: none; /* 화면이 작을 때 Login 링크를 숨김 */
        // }   
        a {
            width:90px;
            text-align: center;
            font-size: 10px;
        }   
    }
`;

const Logo = styled.a`
    padding: 0;
    width: 70px;
    font-size: 0;
    display: inline-block;
    margin-bottom: 10px;
    img {
        display: block;
        width: 100%;
        border-radius: 50%;
    }
  
`;

const Img = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    padding-top: 10px;
    @media (max-width: 768px) {
        padding-top : 10px;
    }
`;

const Login = styled.a`
    text-decoration: none; 
    color : pink;
    background-color: hotpink;
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
    border-radius: 30px;
`;

const Input = styled.input`
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: rgba(195, 185, 196, 0.582);
    border-radius: 5px;
    color: white;
    padding: 5px;
    border: 1px solid lightgray;
    z-index : 1001;
    @media (max-width: 768px) {
        left: 42%;
        width : 180px;
    }
`;
