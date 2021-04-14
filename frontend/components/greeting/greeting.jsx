import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';


class Greeting extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.goBack = this.goBack.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      this.props.updateFilter("ctype", "");
      // this.props.fetchUser(this.props.currentUser.id);
      this.props.history.push("/dashboard/");
    }

    goBack(e){
      e.preventDefault();
      this.props.updateFilter("ctype", "");
      this.props.history.push("/");
    }


    render () {
        const {currentUser, logout, openModal} = this.props;
        const sessionLinks = () => (
            <div className="menu">
                <div className="link" onClick={() => openModal('login')}>Log in</div>
                <div className="link" onClick={() => openModal('signup')}>Sign up</div>
            </div>
        );
        const personalGreeting = () => (
            
            <div className="menu">
                <div className="link" onClick={this.handleClick}>Dashboard</div>
                <div className="link" onClick={logout}>Log Out</div>
            </div>
        );

        return (
            <div className="header">
                <div className="logo-section">
                    <Link to="/" className="domain">
                        <img className="icon logo-icon" src={window.logo} alt="ashademy"/>
                        <span className="website-name" onClick={this.goBack}> Ashademy </span>
                    </Link>
                </div>
                <div className="left-section">
                    {currentUser? <h3 className="hello-message">Hi ! {currentUser.username}</h3> : ""}
                    <div className="dropdown">
                        <button className="click btn header-button">&#9776;<img className="icon profile-icon" src={window.profile}/></button>
                        {currentUser ? personalGreeting() : sessionLinks()}
                    </div>
                </div>
                
            </div>
        )
    }
};


export default withRouter(Greeting);