import { Avatar } from '@mui/material'
import React from 'react'
import './styles/Post.css'
import PostWritingIcon from './PostWritingIcon'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({imgSrc, userName, currentTime, text}) {

  
  return (
    <div id='post'>
      <div id='post-top-side'>
        <Avatar id='post-img' src={imgSrc}></Avatar>
        <div id='post-info'>
          <p id='post-username'>{userName}</p>
          <p id='post-date'>{currentTime}</p>
        </div>
      </div>
      <p id='post-text'>
        {text}
      </p>
      <div id='post-options-container'>
        <PostWritingIcon id='post-option-icon' Icon={ThumbUpAltOutlinedIcon} text='Like' color={'grey'}></PostWritingIcon>
        <PostWritingIcon id='post-option-icon' Icon={CommentOutlinedIcon} text='Comment' color={'grey'}></PostWritingIcon>
        <PostWritingIcon id='post-option-icon' Icon={RepeatOutlinedIcon} text='Repost' color={'grey'}></PostWritingIcon>
        <PostWritingIcon id='post-option-icon' Icon={SendOutlinedIcon} text='Send' color={'grey'}></PostWritingIcon>
      </div>
    </div>
  )
}

export default Post
