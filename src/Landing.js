import React, { useState } from 'react';
import './Landing.css';
import Axios from 'axios'

function Landing(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const sendLoginRequest = (e) => {
    e.preventDefault()
    const admin = {username, password}
    Axios.post('http://localhost:3001/api/v1/login', {admin})
    .then(resp => {
      if (resp.data.success) {
        localStorage.setItem("token", resp.data.jwt)
        props.handleLogin(resp.data.admin)
        // redirect()
      }
      else {
        console.log(resp.data.failure)
      }
     
    })
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
        <input onClick={(e) => sendLoginRequest(e)} type="submit" value="Sign In" />
      </div>
    </form>
  </div>
  </div>
  );
}

export default Landing;
