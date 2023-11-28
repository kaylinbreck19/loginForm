import React from 'react';
import './LoginForm.css';

function LoginForm() {
  return (
    <div className="login-form">
      <h3>Log In</h3>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
