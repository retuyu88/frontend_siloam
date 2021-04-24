import React from "react";

const Login = () => {
  //set variable name and hook to update the variable
  const [name, setName] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);

  return (
    <div className="login">
      <form className="login__form">
        <h1>Login Form</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Login;
