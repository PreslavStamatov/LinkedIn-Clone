
import './styles/PostWritingSection.css'
import './styles/PostWritingIcon.css'
import PostWritingIcon from './PostWritingIcon'
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CreateIcon from '@mui/icons-material/Create';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';
import { useEffect, useState } from 'react';
import Post from './Post';



function PostWritingSection() {

  
  const user = useSelector(selectUser);
  const [components, setComponents] = useState([]);
  const [postText, changePostText] = useState('');

  // const fetchingUserPosts = () => {
  //   fetch(`localhost:8080/post/getAll/${user.email}`,
  //   {
  //     method: "POST",
  //     headers: {"Content-Type":"application/json"},
  //     body:JSON.stringify(user)
  //   }
  //   ).then(response => response.json()).then(e => console.log(e))
  // }

  

  useEffect(() => {
    // Fetch the posts of the logged-in user upon loading the main page
    fetch('http://localhost:8080/post/getAll/' + user.email,
    {
      method: "POST",
      headers: {"Content-Type":"application/json"},
    }
    ).then(response => response.json()).then(postsArr => setComponents(postsArr))
  }, []);

  const addComponent = (e) => {
    if(e.key === 'Enter') {
      const current = new Date();
      const currentDate = `${current.getFullYear().toString()}.${(current.getMonth() + 1).toString().padStart(2, '0')}.${current.getDate().toString().padStart(2, '0')}`;
      
      const post = {id: components.length + 1, date: currentDate, text: postText}
      changePostText('');
      setComponents([...components, post]);

      const textForDB = post.text;
      const dateForDB = String(post.date.toString().replaceAll(".","-"));
      const postForDB = {text: `${textForDB}`, date: `${dateForDB}`};

      console.log(JSON.stringify(postForDB));

      fetch("http://192.168.1.16:8080/post/add",
      {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(postForDB)
      }
      )

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
            <Post imgSrc={user.imgSrc} userName={user.name} currentTime={component.date} text = {component.text}></Post>
          ))}
        </div>

    </>
  )

}

export default PostWritingSection