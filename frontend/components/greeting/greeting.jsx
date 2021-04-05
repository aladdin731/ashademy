import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </div>
  );
  const personalGreeting = () => (
    <div>
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
