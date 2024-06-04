import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {

    const [show, setShow] = useState("false")

    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
    const handleSignUp = () => {
        navigate('/signup')
    }
  return (
    <Div>
        <Logo>
            <img
                    alt="logo"
                    src="/public/images/작은시루.jpg"
                    onClick={() => (window.location.href = '/')}
            />
        </Logo>
        <Div2>
            <Login onClick={handleLogin}>로그인</Login>
            <Login onClick={handleSignUp}>회원가입</Login>
        </Div2>
        


       

    </Div>
  )
}

export default Nav

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    background-color: 'navy';

`
const Div2 = styled.div`

`

const Logo = styled.a`
    padding: 0;
    width: 70px;
    font-size: 0;
    display: inline-block;
    margin-bottom: 10px;
    img {
        display: block;
        width: 100%
    }
`

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
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
`

