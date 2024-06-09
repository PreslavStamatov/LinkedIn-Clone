import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { selectFriend } from '../features/user/friendSlice'
import { useSelector } from 'react-redux'
import './styles/FriendProfile.css'
import PostWritingIcon from './PostWritingIcon'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from './Header'




function FriendProfile() {

  const [posts, setPosts] = useState([]);

  const friend = useSelector(selectFriend);

  useEffect(() => setPosts(friend.posts), [friend])

  return (
    <>
    <Header></Header>
    <div id='friendProfileContainer'>
      
      <div className='friendProfileSection'>
        <div className='profileDetails'>
          <img className='backgroundImg' src='https://shorturl.at/gn4uX' alt=''/>
          <Avatar id='friendAvatar' src={friend.imgSrc ? friend.imgSrc : 'https://shorturl.at/3YIPT'}></Avatar>

          <div className='friendInfo'>
            <h2 id='friendName'>{friend.name}</h2>
            <p id='friendDescription'>Growing the best brands & businesses on LinkedIn™</p>

            <div class='friendButtonsSection'>
              <PostWritingIcon class='friendButton' border='1px solid rgb(0, 105, 190)' id='friendFollowButton' color='white' text='Follow' background='rgb(0, 105, 190)' Icon={AddIcon}></   PostWritingIcon>

              <PostWritingIcon class='friendButton' border='1px solid rgb(0, 105, 190)' id='friendMessageButton' color='rgb(0, 105, 190)' text='Message' Icon={SendOutlinedIcon}></   PostWritingIcon>

              <PostWritingIcon class='friendButton' border='1px solid rgb(0, 105, 190)' id='friendMessageButton' color='rgb(0, 105, 190)' text='More' Icon={ExpandMoreIcon}></   PostWritingIcon>
            </div>

          </div>
          
        </div>
        <div class='friendPostsSection'>
          {posts.map(p => 
             <Post userName={friend.name} text={p.text} imgSrc={friend.imgSrc ? friend.imgSrc : 'a'} currentTime = {p.date}></Post>
          )}
        </div>
      </div>

      <div class='suggestedProfiles'></div>
    </div>
    </>
  )
}


export default FriendProfile
