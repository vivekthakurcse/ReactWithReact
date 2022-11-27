import React from 'react'
import "./App.css";


const Login = () => {
  return (
    <div className='LoginForm'>
      <form action="" className='page'>
        <div>
          <label htmlFor="email">Email : </label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="passw">Password : </label>
          <input type="text" name="passw" id="passw" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;   