import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <h1>This is greeting container</h1>
      <NavLink exact activeClassName="active" to="/" >Main Button with logo</NavLink>
      <br></br>
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </div>
  );
  const personalGreeting = () => (
    <div>
      <h1>This is greeting container</h1>
      <NavLink exact activeClassName="active" to="/" >Main Button with logo</NavLink>
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
