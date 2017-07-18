import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  handleClick(e) {
    e.preventDefault();

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  renderErrors() {
      if (this.props.errors) {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }
    }

  render() {
    return (
      <section>
      <form className='session-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.username}
          placeholder='username'
          onChange={this.update('username')}
          />
        <input
          type='password'
          value={this.state.password}
          placeholder='password'
          onChange={this.update('password')}
          />
        {this.renderErrors()}
        <button>Sign Up!</button>
      </form>
      <button className='login'>Log In</button>
      </section>
    );
  }

}

export default withRouter(SignUp);
