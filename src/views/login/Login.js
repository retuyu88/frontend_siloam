import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.logout();

    this.state = {
      email: "",
      password: "",
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
    const { email, password } = this.state;
    console.log("aa");
    if (email && password) {
      console.log("here");
      this.props.login(email,password)
    }
  }
  render() {
    const { loggingIn } = this.props;
    const { email, password } = this.state;
    return (
      <div className="login">
        <form className="login__form" onSubmit={this.handleSubmit}>
          <h1>Login Form</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange.bind(this)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange.bind(this)}
            value={password}
          />
          <button
            type="submit"
            className="submit__btn"
          >
            Login
          </button>
          {loggingIn && (
            <img
              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              alt="loading..."
            />
          )}
        </form>
      </div>
    );
  }
}
function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}
const actionCreators = {
  login: userActions.login
}

const connectedLoginPage = connect(mapState,actionCreators)(Login);

export { connectedLoginPage as Login };
