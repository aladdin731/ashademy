import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';


class Greeting extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      this.props.updateFilter("ctype", "");
      // this.props.fetchUser(this.props.currentUser.id);
      this.props.history.push("/dashboard/");
    }



    render () {
      const {currentUser, logout, openModal} = this.props;
      const sessionLinks = () => (
      <div className="header">
        <div className="logo-section">
          <Link to="/" className="domain">
            <img className="icon logo-icon" src={window.logo} alt="ashademy"/>
            <span className="website-name"> Ashademy </span>
          </Link>
        </div>
        
        <div className="login-section">
          <button className="btn header-button" onClick={() => openModal('login')}>Login</button>
          <button className="btn header-button" onClick={() => openModal('signup')}>Signup</button>
        </div>

      </div>
    );
    const personalGreeting = () => (
      <div className="header">
        <div className="logo-section">
          <Link to="/" className="domain">
            <img className="icon logo-icon" src={window.logo} alt="ashademy"/>
             <span className="website-name"> Ashademy </span>
          </Link>
        </div>

        <div className="login-section">
          <button className="btn header-button" onClick={this.handleClick}>Dashboard</button>
          <button className="btn header-button" onClick={logout}>Log Out</button>
        </div>
      </div>
    );

    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    }
};


export default withRouter(Greeting);
