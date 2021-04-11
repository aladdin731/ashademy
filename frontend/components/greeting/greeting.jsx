import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';


class Greeting extends React.Component {
    constructor(props) {
      super(props);
      // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(e) {
    //   e.preventDefault();
    //   this.props.fetchUser(this.props.currentUser.id);
    //   this.props.history.push("/dashboard/");
    // }

    render () {
      const {currentUser, logout, openModal} = this.props;
      const sessionLinks = () => (
      <div>

        <NavLink exact activeClassName="active" to="/" >Main Button with logo</NavLink>
        <br></br>
        <nav className="login-signup">
          <button onClick={() => openModal('login')}>Login</button>
          &nbsp;or&nbsp;
          <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
         <NavLink exact activeClassName="active" to="/courses" >All Courses</NavLink>
      </div>
    );
    const personalGreeting = () => (
      <div>
        <hgroup className="header-group">
          <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
        <NavLink exact activeClassName="active" to="/" >Main Button with logo</NavLink>
        <br></br>
         <NavLink exact activeClassName="active" to="/dashboard" >Dashboard</NavLink>
         <br></br>
         <NavLink exact activeClassName="active" to="/courses" >All Courses</NavLink>
        <h2>Hi, {currentUser.username}!</h2>
      </div>
    );

    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    }
};


export default withRouter(Greeting);
