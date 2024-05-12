import './styles/PostWritingIcon.css'

interface Params {
  className: string;
  Icon: React.ElementType;
  text: string;
  color: string;
}

function PostWritingIcon({Icon, text, color}:Params) {
  return(
    <div id='post-writing-icon-container'>
    <Icon style={{color: color}} id='post-writing-icon'></Icon>
    <p id='post-writing-text'>{text}</p>
    </div>
  )
}

export default PostWritingIcon