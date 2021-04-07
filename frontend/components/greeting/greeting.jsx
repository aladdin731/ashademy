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
      const {currentUser, logout} = this.props;
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
        <br></br>
         <NavLink exact activeClassName="active" to="/dashboard" >Dashboard</NavLink>
        
        <h2>Hi, {currentUser.username}!</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
    }
};


export default withRouter(Greeting);
