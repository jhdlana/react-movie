import React from 'react'
import styled from 'styled-components'

const Signup = () => {
  return (
    <Div>
        <h2>회원가입</h2>
        <P>
        이름 : 
        </P>
        <Input type='text' placeholder='이름'/>
        <P>
        이메일 : 
        </P>
        <Input type='email' placeholder='이메일'/>
        <P>
        아이디 :
        </P>
        <Input type='text' placeholder='아이디'/>
        <P>
        비밀번호 : 
        </P>
        <Input type='password' placeholder='비밀번호'/>
        <P>
        비밀번호 확인 : 
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
    height: 700px;

`

const P = styled.p`
    font-size: 18px;
    // display: flex;
    margin: 0px;
    margin-top: 18px;
    text-align: left;

`
const Input = styled.input`
    height: 18px;
    width: 180px;
`

const Button = styled.button`
    height: 30px;
    width: 70px;
    margin: 18px;
`