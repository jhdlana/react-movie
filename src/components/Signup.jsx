import React from 'react'
import styled from 'styled-components'

const Signup = () => {
  return (
    <Div>
        <h2>회원가입</h2>
        <P>
        <Span>이름 :  </Span>
        </P>
        <Input type='text' placeholder='이름'/>
       
        <P>
        <span>이메일 : </span>
        </P>
        <Input type='email' placeholder='이메일'/>
        <P>
        <span>아이디 : </span>
        </P>
        <Input type='text' placeholder='아이디'/>
        <P>
        <span>비밀번호 : </span> 
        </P>
        <Input type='password' placeholder='비밀번호'/>
        <P>
        <span>비밀번호 확인 : </span> 
        </P>
        <Input type='password' placeholder='비밀번호 확인'/>

        {/* <p>
        이름 : <input type='text' placeholder='이름'/>
        </p>
        <p>
        이메일 : <input type='email' placeholder='이메일'/>
        </p>
        <p>
        아이디 : <input type='text' placeholder='아이디'/>
        </p>
        <p>
        비밀번호 : <input type='password' placeholder='비밀번호'/>
        </p>
        <p>
        비밀번호 확인 : <input type='password' placeholder='비밀번호 확인'/>
        </p> */}
        
        <Button>회원가입</Button>
    </Div>
  )
}

export default Signup

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 865px;
    margin-top: 70px;

`

const P = styled.p`
    font-size: 18px;
    display: flex;
    margin: 0px;
    margin-top: 18px;
    text-align: left;
    width: 100%;
    justify-content: space-evenly;
`
const Span = styled.span`
    text-align:left;
`
const Input = styled.input`
    // height: 18px;
    width: 250px;
`

const Button = styled.button`
    height: 40px;
    width: 180px;
    margin: 18px;
`