import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1877f2;
  font-weight: bold;
  font-size: 1.5rem;
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #1877f2;
  border-radius: 8px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const LogoText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

function Logo() {
  return (
    <LogoContainer to="/home">
      <LogoIcon>C</LogoIcon>
      <LogoText>Chittirai</LogoText>
    </LogoContainer>
  );
}

export default Logo;