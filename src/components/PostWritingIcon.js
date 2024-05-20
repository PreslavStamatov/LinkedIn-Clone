import './styles/PostWritingIcon.css'


function PostWritingIcon({Icon, text='default', color}) {
  return(
    <div id='post-writing-icon-container'>
    <Icon style={{color: color}} id='post-writing-icon'></Icon>
    <p id='post-writing-text'>{text}</p>
    </div>
  )
}

export default PostWritingIcon