import './styles/PostWritingSection.css'
import './styles/PostWritingIcon.css'
import PostWritingIcon from './PostWritingIcon'
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CreateIcon from '@mui/icons-material/Create';

function PostWritingSection() {
  return (
    <div id='post-writing-section'>

      <div id='top-side'>
        <img src="https://t.ly/64wxR" alt="profile-picture"
        id='profile-picture'/>

        <div id='post-input-container'>
          <CreateIcon style={{marginLeft: 10, marginRight: 5}}></CreateIcon>
          <input type="text"
          placeholder='Start a post'
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
  )

}

export default PostWritingSection