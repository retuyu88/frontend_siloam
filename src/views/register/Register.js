import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import '../login/Login.css';
import { Link } from 'react-router-dom'

class Register extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.logout();

    this.state = {
      name : "",
      email: "",
      password: "",
      password_confirmation: "",
      submitted: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { name,email, password,password_confirmation } = this.state;
    console.log("aa");
    if (email && password) {
      console.log("here");
      this.props.regis(name,email,password,password_confirmation)
    }
  }
  render() {
    const { registering } = this.props;
    const { email, password,name, password_confirmation} = this.state;
    return (
      <div className="login">
        <form className="login__form" onSubmit={this.handleSubmit}>
          <h1>Register Form</h1>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleChange.bind(this)}
            value={name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange.bind(this)}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange.bind(this)}
            value={password}
          />
          <input
            type="password"
            placeholder="Password"
            name="password_confirmation"
            onChange={this.handleChange.bind(this)}
            value={password_confirmation}
          />
          <button
            type="submit"
            className="submit__btn"
          >
            Register
          </button>
          {registering && (
            <img
              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              alt="loading..."
            />
          )}
           <Link to="/login" className="btn btn-primary">Login</Link>
        </form>
        
      </div>
    );
  }
}
function mapState(state) {
  const { registering } = state.register;
  return { registering };
}
const actionCreators = {
  regis: userActions.register
}

const connectedRegisterPage = connect(mapState,actionCreators)(Register);

export { connectedRegisterPage as Register };
