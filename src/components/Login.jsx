import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import app from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthContext from '../AuthContext';

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {

  // })

  const onSubmit = async (data) => {
    try {
      setErrorMessage(""); // 이전 오류 메시지 초기화
      await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("success");
      setIsLoggedIn(true)
      navigate('/main');
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/wrong-password') {
        setErrorMessage('비밀번호가 틀렸습니다.');
      } else if (error.code === 'auth/user-not-found') {
        setErrorMessage('해당 이메일을 사용하는 사용자를 찾을 수 없습니다.');
      } else {
        setErrorMessage('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
      }
    }
  };

  const handleSign = () => {
    // setIsLoggedIn(false)
    navigate('/signup')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Div>
        <H1>Welcome to JUCAT-MOVIE</H1>
        <h2>Login</h2>
        <p>
          Email: <input type='email' placeholder='이메일' {...register('email', { required: '이메일을 입력해주세요.' })} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </p>
        <p>
          Password: <input type='password' placeholder='비밀번호' {...register('password', { required: '비밀번호를 입력해주세요.' })} />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </p>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <P>
        <button type="submit">Login</button>
        <button onClick={handleSign}>Sign up</button>
        </P>
       
      </Div>
    </form>
  );
};

export default Login;
const P = styled.p `
  display: flex;
  gap: 50px; 
`
const H1 = styled.h1`
  margin-bottom: 100px;
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 765px;
  margin-top: 70px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;
