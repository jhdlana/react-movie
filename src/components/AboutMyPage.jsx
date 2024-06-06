import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getAuth } from 'firebase/auth';

const MyPage = () => {

    const {currentUser} = getAuth()
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Firebase에서 현재 사용자 정보 가져오기
    if (currentUser) {
      setEmail(currentUser.email || ''); // Firebase에서 사용자 이메일 가져오기
      }
  }, [currentUser]);

  return (
    <Container>
      <UserInfo>
        <Title>My Profile</Title>
        <InfoItem>
          <Label>Email:</Label>
          <Value>{email}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Email:</Label>
          <Value>john@example.com</Value>
        </InfoItem>
      </UserInfo>
      <UserActions>
        <Button>Edit Profile</Button>
        <Button>Change Password</Button>
        <Button>Logout</Button>
      </UserActions>
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  max-width: 600px;
  margin: 70px auto;
  padding: 20px;
`;

const UserInfo = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 40px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const Value = styled.span`
  color: #333;
`;

const UserActions = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;
