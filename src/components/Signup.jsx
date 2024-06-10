import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'; // React Hook Form 사용하면 회원가입 및 로그인 입력 form을 간편하게 구현할 수 있다.
import styled from 'styled-components';
import app from '../firebase';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const { 
        register, // <input> <select> <textarea>.. 등을 React Hook Form에 등록 시킴 -> 해당 필드의 값이나 이벤트를 쉽게 관리할수있게 도와줌
        handleSubmit, // 폼이 유요할 경우에만 콜백함수 호출 -> 폼 제출 시 유효성 검사를 자동 수행 및 유효하지 않으면 제출하지 않음
        watch, // 지정된 입력 필드의 값이나 전체 폼의 값 변화를 관찰 -> 값이 변할때마다 반응 및 작업 수행
        formState: {errors}, // 폼 유효성 검사에서 발생하는 오류 포함
    } = useForm(); // Form 기능을 관리하고 제어하는 hook인 useForm을 사용 (위는 반환값)

    const auth = getAuth(app); // getAuth 함수를 사용하면 Firebase 앱과 Firebase Authentication 서비스가 연결됨. 이렇게 하면 인증 관련 작업을 수행할 수 있는 인증 객체를 얻게 됨.

    const onSubmit =  async (data) => {
        console.log(data);
        try {
            const createdUser = await createUserWithEmailAndPassword(
                auth, // firbase authentication과 연결되고 작동하도록 하는데 필수이기때문에 같이 인자로 넣음
                data.email,
                data.password
            );
            alert('회원가입이 완료 되었습니다.');
            navigate('/');
            console.log(createdUser);
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Div>
                <h2>SignUp</h2>
                <P>
                    <label htmlFor="name">Name :  </label>
                </P>
                <Input 
                    type='text' 
                    name='name' 
                    id='name' 
                    placeholder='이름' 
                    {...register('name', { required: true, pattern: /^[가-힣a-zA-Z]+$/ })} 
                />
                {errors.name && <p>이름을 올바르게 입력해주세요. (한글 또는 영문)</p>}
                
                <P>
                    <label htmlFor="email">Email : </label>
                </P>
                <Input 
                    type='email' 
                    name='email' 
                    id='email' 
                    placeholder='이메일' 
                    {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} 
                />
                {errors.email && <p>올바른 이메일 주소를 입력해주세요.</p>}

                <P>
                    <label htmlFor="password">Password : </label> 
                </P>
                <Input 
                    type='password' 
                    name='password' 
                    id='password' 
                    placeholder='비밀번호' 
                    {...register('password', { required: true, minLength: 6, maxLength: 20 })} 
                />
                {errors.password && errors.password.type === 'required' && (<p>비밀번호를 입력해주세요.</p>)}
                {errors.password && errors.password.type === 'minLength' && (<p>비밀번호는 최소 6자 이상입니다.</p>)}
                {errors.password && errors.password.type === 'maxLength' && (<p>비밀번호는 최대 20자 이하입니다.</p>)}

                <P>
                    <label htmlFor="password-check">Password Check : </label> 
                </P>
                <Input 
                    type='password' 
                    name='password-check' 
                    id='password-check' 
                    placeholder='비밀번호 확인' 
                    // {...register('passwordCheck', { required: true, validate: value => value === watch('password') })} 
                    {...register('passwordCheck', { 
                        required: true, 
                        pattern: new RegExp(`^${watch('password')}$`)  //  특정한 문자열이나 문자 패턴을 찾음
                    })}
                    
                />
                {errors.passwordCheck && <p>비밀번호가 일치하지 않습니다.</p>}

                <Button type='submit'>SignUp</Button>
            </Div>
        </form>
    );
};

export default Signup;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 865px;
    margin-top: 70px;
`;

const P = styled.p`
    font-size: 18px;
    display: flex;
    margin: 0px;
    margin-top: 18px;
    text-align: left;
    width: 100%;
    justify-content: space-evenly;
`;

const Input = styled.input`
    width: 250px;
`;

const Button = styled.button`
    height: 40px;
    width: 180px;
    margin: 18px;
`;
