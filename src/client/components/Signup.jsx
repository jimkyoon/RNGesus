import React from 'react';

const Signup = props => (
  <div>
    <h3>Sign up!</h3>
    <label htmlFor="unsign">Username: </label>
    <input id="unsign" type="text" />
    <label htmlFor="passsign">Password: </label>
    <input id="passsign" type="password" />
    <button>Sign Up!</button>
  </div>
);

export default Signup;
