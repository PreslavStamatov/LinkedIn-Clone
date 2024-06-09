import { Avatar } from '@mui/material'
import React from 'react'
import './styles/FriendSearchItem.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { track } from '../features/user/friendSlice'


function FriendSearchItem({user}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openFriendProfile = (e) => {
    e.preventDefault();
    dispatch(track({name: user.name, email: user.email ,imgSrc: user.imgSrc, posts: user.posts}))
    navigate('/friend');
  }

  return (
    <div id='friendSearchItem' onClick={openFriendProfile}>
      <Avatar src={user.imgSrc}className='friendAvatar'></Avatar>
      <p className='friendName'>{user.name}</p>
    </div>
  )
}

export default FriendSearchItem
