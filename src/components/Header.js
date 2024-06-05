import React from 'react';
import './styles/Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/user/userSlice';

function Header() {

  const user = useSelector(selectUser);
  const name = user.name;
  const firstName = name.split(' ')[0];
  const dispatch = useDispatch();

  const userLogOut = async (e) => {
    e.preventDefault();
    const email = user.email;
  
    console.log(email);
    
    await fetch(`http://192.168.1.16:8080/user/signOut/${email}`,
      {
        method: "POST"
      }
    ).then(async body => await body.text())
    .then(text => {
      dispatch(logout())
      alert(text)
    })
  }

  return (
    <div className='header'>
      
      <div className='header-left'>
        <img src="https://t.ly/1UX0B" alt="logo" />

        <div className='header-search'>
          <img src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg" alt="search" />
          <input type="text"
          placeholder='Search' />
        </div>

      </div>

      <div className='header-right'>
        <HeaderOption Icon={HomeIcon} heading='Home'></HeaderOption>
        <HeaderOption Icon={PeopleIcon} heading='My Network'></HeaderOption>
        <HeaderOption Icon={WorkIcon} heading='Jobs'></HeaderOption>
        <HeaderOption Icon={SmsIcon} heading='Messaging'></HeaderOption>
        <HeaderOption Icon={NotificationsIcon} heading='Notifications'></HeaderOption>
        <HeaderOption onClick={userLogOut} Avatar={Avatar} src={user.imgSrc} heading={firstName}></HeaderOption>
      </div>
      
    </div>
  )
}

export default Header;
