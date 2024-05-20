import { Avatar } from '@mui/material'
import React from 'react'
import './styles/Post.css'
import PostWritingIcon from './PostWritingIcon'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

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
        <PostWritingIcon id='post-option-icon' Icon={ThumbUpAltOutlinedIcon} color={'grey'}></PostWritingIcon>
        <PostWritingIcon id='post-option-icon' Icon={ThumbUpAltOutlinedIcon} color={'grey'}></PostWritingIcon>
        <PostWritingIcon id='post-option-icon' Icon={ThumbUpAltOutlinedIcon} color={'grey'}></PostWritingIcon>
        <PostWritingIcon id='post-option-icon' Icon={ThumbUpAltOutlinedIcon} color={'grey'}></PostWritingIcon>
      </div>
    </div>
  )
}

export default Post
