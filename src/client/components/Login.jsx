import React from 'react';

const Login = props => (
  <div>
    <h3>Log in!</h3>
    <label htmlFor="unlog">Username: </label>
    <input id="unlog" type="text" />
    <label htmlFor="passlog">Password: </label>
    <input id="passlog" type="password" />
    <button>Log In!</button>
  </div>
);

export default Login;
