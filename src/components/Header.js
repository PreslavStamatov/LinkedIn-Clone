import React, { useEffect } from 'react';
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
import { useState } from 'react';
import FriendSearchItem from './FriendSearchItem';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {

  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const name = user.name;
  const firstName = name.split(' ')[0];
  const dispatch = useDispatch();

  

  const userLogOut = async (e) => {
    e.preventDefault();
    
      
    const email = user.email;

    navigate('/');
    
    await fetch(`http://192.168.1.16:8080/user/signOut/${email}`,
      {
        method: "POST"
      }
    ).then(async body => await body.text())
    .then(text => {
      toast.success(text)
      dispatch(logout())
    })

    
  }

  const [input, setInput] = useState('');
  const [searchedUsers, setSearchedUsers] = useState([]);
  
  

  const onChange = (e) => {
    e.preventDefault()
    setInput(e.target.value);
    
  }

  

  useEffect(() => {
    const fetchUsersFromInput = async function () {
      const userResponseObjects = await fetch(`http://192.168.1.16:8080/user/getAll/${input.trim()}`,
        {
          method: "POST"
        }
      ).catch(e => console.log(e));
  
      const userObjects = await userResponseObjects.json().catch(e => console.log(e));
  
      if (userObjects) {
        setSearchedUsers(userObjects);
      }
    };
    
    if(input){fetchUsersFromInput()}} ,[input]);

    const [isOpen, setIsOpen] = useState(false);

    const handleFocus = () => {
      setIsOpen(true)
      if(document.getElementById('main-content-container')){
        document.getElementById('main-content-container').style.zIndex=-5
      } else if (document.getElementById('friendProfileContainer')){
        document.getElementById('friendProfileContainer').style.zIndex=-5
      }
    }

    

    const openHomePage = (e) => {
      e.preventDefault();
      navigate('/');
    }

    const handleBlur = () => {
      setTimeout(() => {
        setIsOpen(false)
        if(document.getElementById('main-content-container')){
        document.getElementById('main-content-container').style.zIndex=5
      } else if (document.getElementById('friendProfileContainer')){
        document.getElementById('friendProfileContainer').style.zIndex=5
      }
    }, 200
    )
    }

    

  return (
    <div className='header'>
      
      
      <div className='header-left'>
        
        <img src="https://t.ly/1UX0B" alt="logo" onClick={openHomePage}/>

        <div className='header-search' style={isOpen ? {borderTopLeftRadius: '5px', borderTopRightRadius: '5px'} : {}}>
          <img src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg" alt="search" />
          <input type="text"
          placeholder='Search'
          value={input}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          />
          <div className='friendSearchResults'>
            {isOpen && searchedUsers.map(user => <FriendSearchItem user={user}></FriendSearchItem>)}
          </div>

        </div>

        
      </div>

      <div sea>
      
      </div>

      <div className='header-right'>
        <HeaderOption Icon={HomeIcon} heading='Home'></HeaderOption>
        <HeaderOption Icon={PeopleIcon} heading='My Network'></HeaderOption>
        <HeaderOption Icon={WorkIcon} heading='Jobs'></HeaderOption>
        <HeaderOption Icon={SmsIcon} heading='Messaging'></HeaderOption>
        <HeaderOption Icon={NotificationsIcon} heading='Notifications'></HeaderOption>
        <HeaderOption onClick={userLogOut} Avatar={Avatar} src={user.imgSrc} heading={firstName}></HeaderOption>
        <ToastContainer/> 
      </div>
      <ToastContainer/> 
    </div>
  )
}

export default Header;
