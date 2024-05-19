import React, { useState } from 'react'
import './styles/Login.css'
import { login } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const [name, updateName] = useState("");
  const [imgSrc, updateImgSrc] = useState("");
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");

  const dispatch = useDispatch();
  

  const register = () => {
    dispatch(login({name, imgSrc, email, password}));
  }

  return (
    <div id='login-container'>
      <img id='login-logo' src='https://t.ly/mri5J' alt=''/>

      <input id='name-input' type='text' value={name} onChange={e => updateName(e.target.value)} placeholder='Full name (required if registering)'></input>

      <input id='profile-picture-input' type='text' value={imgSrc} onChange={e => updateImgSrc(e.target.value)} placeholder='Profile picture URL (optional)'></input>

      <input id='email-input' type='text' value={email} onChange={e => updateEmail(e.target.value)} placeholder='Email'></input>

      <input id='password-input' type='text' value={password} onChange={e => updatePassword(e.target.value)} placeholder='Password'></input>

      <button type='submit' id='signin-input'>Sign In</button>

      <p>
        Not a member?{" "}  
        <span id='register-now' onClick={register}>
          Register now
        </span>
      </p>
    </div>
  )
}

export default Login
