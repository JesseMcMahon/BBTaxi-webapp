import React, { useState } from 'react';
import './Landing.css';

function Landing() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const sendLoginRequest = (e) => {
    e.preventDefault()

    //Here is the username and password that needs to be
    //sent to the api to login.
    console.log(username, password)
  }


  
  return (
    <div className="login-page">
    <h1 className="login-header">Bradley Beach Taxi Service</h1>
    <div className="login-box">
    <h1>Login</h1>
    <form>
      <div className="user-box">
      <label>Username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
      </div>
      <div className="user-box">
      <label>Password:</label>
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required />
      </div>
      <div className="submit">
        <input onClick={(e) => sendLoginRequest(e)} type="submit" value="Submit" />
      </div>
    </form>
  </div>
  </div>
  );
}

export default Landing;