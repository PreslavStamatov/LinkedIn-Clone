import React, { useState } from 'react'
import './styles/Login.css'
import { login } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [name, updateName] = useState("");
  const [stateImgSrc, updateImgSrc] = useState("");
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");

    

  const dispatch = useDispatch();

  const signIn = async (e) => {
    e.preventDefault();
    const user = {email, password};

    const resp = await fetch("http://192.168.1.16:8080/user/signIn",
      {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(user)
      }
    ).then(async response => {  
      return await response.json();
    }).then(async responseObj => {
      if(responseObj.error === null) {
        const name = responseObj.data.name;
        const imgSrc = responseObj.data.imgSrc;
        dispatch(login({name, imgSrc, email, password}));
        return responseObj.message;
      } else {
        return responseObj.error;
      }
    })
  
    if(resp.startsWith('Welcome')) {
      toast.success(resp)
    } else {
      toast.error(resp)
    }
    
  }
  

  const register = (e) => {
    e.preventDefault();
    const imgSrc = stateImgSrc;

    const user = {name, imgSrc, email, password};
    fetch("http://192.168.1.16:8080/user/add",
      {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(user)
      }
    )
    .then(async response => {
      const text = await response.text();
      if(response.ok) {
        dispatch(login({name, imgSrc, email, password}));
      }
      return text;
  }).then(text => {
    if(text.startsWith('User')) {
      toast.success(text);
    } else {
      toast.error(text)
    }
  })
}

  

  return (
    <>
    
    
    <div id='login-container'>

      
      
      <img id='login-logo' src='https://t.ly/IvOkU' alt=''/>

      <input id='name-input' type='text' value={name} onChange={e => updateName(e.target.value)} placeholder='Full name (required if registering)'></input>

      <input id='profile-picture-input' type='text' value={stateImgSrc} onChange={e => updateImgSrc(e.target.value)} placeholder='Profile picture URL (optional)'></input>

      <input id='email-input' type='text' value={email} onChange={e => updateEmail(e.target.value)} placeholder='Email'></input>

      <input id='password-input' type='text' value={password} onChange={e => updatePassword(e.target.value)} placeholder='Password'></input>
      
        
      <button type='submit' id='signin-input' onClick={signIn}>Sign In</button>
      

      <p>
        Not a member?{" "}  
        <span id='register-now' onClick={register}>
          Register now
        </span>
      </p>
      
    </div>
    
    </>
  )
}

export default Login
