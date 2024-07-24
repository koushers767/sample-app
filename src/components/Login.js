import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px); // Adjust for header height
  background-color: #f0f2f5;
`;

const LoginForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  color: #1877f2;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #606770;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #dddfe2;
  border-radius: 6px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #166fe5;
  }
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <InputGroup>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;