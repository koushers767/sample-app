import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Login from './components/Login';
import Logo from './components/Logo';
import { AuthProvider, useAuth } from './context/AuthContext';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.main`
  flex: 1;
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #166fe5;
  }
`;

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function AppHeader() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Header>
      <Logo />
      {isAuthenticated && <LogoutButton onClick={handleLogout}>Logout</LogoutButton>}
    </Header>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContainer>
          <AppHeader />
          <Content>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </Content>
        </AppContainer>
      </Router>
    </AuthProvider>
  );
}

export default App;