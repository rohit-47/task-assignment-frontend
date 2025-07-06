import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styling/Header.css';
import { isLoggedIn, logout, login } from '../utils/auth';

function Header() {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();

  const handleLogout = () => {
    logout();
    navigate('/login');
    window.location.reload();
  };

  const handleLogin = () => {
    login();
    navigate('/');
    window.location.reload();
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="app-logo" style={{cursor: 'pointer'}} onClick={() => navigate('/')}>📦 Cataloger</span>
      </div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        {loggedIn ? (
          <>
            <span className="profile-icon" title="Profile">👤</span>
            <button className="auth-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button className="auth-btn" onClick={handleLogin}>Login</button>
        )}
      </nav>
    </header>
  );
}

export default Header;
