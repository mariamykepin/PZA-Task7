import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    alert('You have been logged out.');
    navigate('/');
  };

  return (
    <div className="success-container">
      <h2>Login Successful</h2>
      <p>Welcome! You have successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};


export default Success;