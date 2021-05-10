import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // Errors should clear when moving between /signup and /login.
    this.props.clearErrors();
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let text = this.props.formType === "Log in" ? "Don't have an account?" : "Already have an account?"
    return (
      <div className="modal-container">

        <div className="modal-header">
          <span className="modal-title">{this.props.formType}</span>
        </div>

        <form onSubmit={this.handleSubmit} className="modal-form">
          <button type="button" className="close-x" onClick={this.props.closeModal}>&times;</button>
          <div className="modal-form-input">
            <div className="modal-input-block">
              <label className="modal-input-label">Username
              <br></br>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="input modal-input"
                />
              </label>
            </div>

            <div className="modal-input-block">
              <label className="modal-input-label">Password
              <br></br>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="input modal-input"
                />
              </label>
            </div>
            
            <span className="modal-error"> {this.renderErrors()} </span>
            <input className="btn modal-submit" type="submit" value={this.props.formType} />
          </div>

        </form>
        <div className="modal-footer">
          <span className="modal-footer-title">{text} {this.props.otherForm}</span>
          <button className="btn modal-footer-demo" onClick={() => this.props.handleDemo().then(this.props.closeModal())}>Log In as Demo User</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
