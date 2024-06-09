import './styles/PostWritingIcon.css'


function PostWritingIcon({Icon, text='default', color, border, background}) {
  return(
    <div id='post-writing-icon-container' style={{border: border, background: background}}>
    <Icon style={{color: color}} id='post-writing-icon'></Icon>
    <p id='post-writing-text' style={{color: color}}>{text}</p>
    </div>
  )
}

export default PostWritingIcon