import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Div>
        <h2>로그인</h2>
        <p>
        아이디 : <input type='text' placeholder='아이디'/>
        </p>
        <p>
        비밀번호 : <input type='password' placeholder='비밀번호'/>
        </p>
        <button>로그인</button>
    </Div>
  )
}

export default Login

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 865px;
    margin-top: 70px;

`