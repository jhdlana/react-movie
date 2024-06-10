import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import app from '../firebase';
import AuthContext from '../AuthContext';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const initialUserData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {};

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState(initialUserData);
  const { pathname } = useLocation();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setIsLoggedIn(false);
        navigate('/');
        console.log(user)
      } else if (user && pathname === '/') {
        setIsLoggedIn(true);
        navigate('/main');
        console.log(user)
      }
    });

    
  }, [auth, navigate, pathname, setIsLoggedIn]);

  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUserData(result.user);
      localStorage.setItem('userData', JSON.stringify(result.user));
      setIsLoggedIn(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const onSubmit = async (data) => {
    try {
      setErrorMessage(""); // Clear previous error message
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setIsLoggedIn(true);
      navigate('/main');
    } catch (error) {
      console.error(error);
      switch (error.code) {
        case 'auth/wrong-password':
          setErrorMessage('비밀번호가 틀렸습니다.');
          break;
        case 'auth/user-not-found':
          setErrorMessage('해당 이메일을 사용하는 사용자를 찾을 수 없습니다.');
          break;
        default:
          setErrorMessage('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
          break;
      }
    }
  };

  const handleSign = () => {
    navigate('/signup');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Div>
        <H1>Welcome to JUCAT-MOVIE</H1>
        <h2>Login</h2>
        <p>
          Email: <input type="email" placeholder="이메일" {...register('email', { required: '이메일을 입력해주세요.' })} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </p>
        <p>
          Password: <input type="password" placeholder="비밀번호" {...register('password', { required: '비밀번호를 입력해주세요.' })} />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </p>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <P>
          <button type="submit">Login</button>
          <button type="button" onClick={handleSign}>Sign up</button>
        </P>
        <P1>
          <button type="button" onClick={handleGoogle}>Google Login</button>
        </P1>
      </Div>
    </form>
  );
};

export default Login;

const P = styled.p`
  display: flex;
  gap: 50px;
`;

const P1 = styled.p`
  display: flex;
  gap: 50px;
`;

const H1 = styled.h1`
  margin-bottom: 100px;
`;

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
