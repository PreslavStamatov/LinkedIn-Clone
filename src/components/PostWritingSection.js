
import './styles/PostWritingSection.css'
import './styles/PostWritingIcon.css'
import PostWritingIcon from './PostWritingIcon'
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CreateIcon from '@mui/icons-material/Create';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';
import HeaderOption from './HeaderOption'
import { useState } from 'react';
import HiringSection from './HiringSection';
import Post from './Post';



function PostWritingSection() {

  const user = useSelector(selectUser);

  const [components, setComponents] = useState([]);
  const [postText, changePostText] = useState('');

  // Function to add a new component
  const addComponent = (e) => {
    if(e.key === 'Enter') {
      const current = new Date();
      const currentDate = `${current.getHours().toString()}:${current.getMinutes().toString().padStart(2, '0')} ${current.getDate().toString()}.${(current.getMonth() + 1).toString()}.${current.getFullYear().toString()}`;
  
      setComponents([...components, { id: components.length + 1, currentTime: currentDate, text: postText}]);
    }
  };

  return (

    <>
  
    <div id='post-writing-section'>

      <div id='top-side'>
        <img src={user.imgSrc} alt=""
        id='profile-picture'/>

        <div id='post-input-container'>
          <CreateIcon style={{marginLeft: 10, marginRight: 5}}></CreateIcon>
          <input type="text"
          value={postText}
          onChange={e => changePostText(e.target.value)}
          placeholder='Start a post' onKeyDown={(e) => addComponent(e)}
          id='post-input'/>
        </div>

      </div>

      <div id='bottom-side'>

        <PostWritingIcon className='media'
        Icon = {PanoramaOutlinedIcon}
        text = 'Media'
        color = 'rgb(24, 128, 247)'>
        </PostWritingIcon>

        <PostWritingIcon className='event'
        Icon = {CalendarMonthIcon}
        text = 'Event'
        color = 'rgb(168, 109, 0)'></PostWritingIcon>

        <PostWritingIcon className='article'
        Icon = {ArticleOutlinedIcon}
        text = 'Write Article'
        color = 'rgb(255, 113, 88)'></PostWritingIcon>

      </div>
      
    </div>

    <div className="components-container">
          {components.map((component) => (
            <Post imgSrc={user.imgSrc} userName={user.name} currentTime={component.currentTime} text = {component.text}></Post>
          ))}
        </div>

    </>
  )

}

export default PostWritingSection