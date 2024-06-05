import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import useOnClickOutsite from '../hooks/useOnClickOutsite'
import { IoLogoOctocat } from "react-icons/io";

const Nav = () => {

    // const [show, setShow] = useState("false")

    const [showInput, setShowInput] = useState(false)

    const [inputValue, setInputValue] = useState("")

    const navigate = useNavigate()
    

    const handleLogin = () => {
        navigate('/login')
    }
    const handleSignUp = () => {
        navigate('/signup')
    }

    const handleInput = (e) => {
        setInputValue(true)
        setInputValue(e.target.value)
        console.log(inputValue)
        navigate(`/search?영화제목=${e.target.value}`) // ?이후부터 query string 시작 & 그 뒤론 key=value 형태로 접속
        
    }
    const outClick = useRef(null) // onClick 참조
    
    const handleClick = () =>{
        setShowInput((prev) => !(prev))
    }

    console.log(outClick)

  return (
    <Div>
        <Logo>
            <Img
                    alt="logo"
                    src="/public/images/juju.jpeg"
                    onClick={() => (window.location.href = '/')}
            />
        </Logo>
        {showInput === false && (
        <Input 
            type='text'
            placeholder='검색하세요.' 
            value={inputValue}   
            onChange={handleInput} 
        />
        )}
   
        <Div2>
            <Span>
                <IoLogoOctocat size='30px' onClick={handleClick}/>
            </Span >
            <Login onClick={handleLogin}>로그인</Login>
            <Login onClick={handleSignUp}>회원가입</Login>
        </Div2>
    </Div>
  )
}

export default Nav

const Span = styled.span`
    margin-top: 6px;
    margin-right: 10px;
`

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


`
const Div2 = styled.div`
    margin-right: 20px;
    display: flex;
    gap: 10px; 
`

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
    margin-bottom: 0px;
`
const Img = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
`

const Login = styled.a`
    text-decoration: none; 
    color : pink;
    // background-color: rgba(0, 0, 0, 0.6);
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
`


const Input = styled.input`
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: rgba(195, 185, 196, 0.582);
    // background-color: rgba(186, 159, 189, 0.582);
    border-radius: 5px;
    color: white;
    padding: 5px;
    border: 1px solid lightgray;
`
