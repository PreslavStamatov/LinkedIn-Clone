import React from 'react'
import './styles/HeaderOption.css'

interface Props{
  heading: string;
  Icon?: React.ElementType;
  Avatar?: React.ElementType;
  src?: string;
}

function HeaderOption({heading, Icon, Avatar, src}: Props) {
  return (
    <div className='headerOption'>
    
      {Icon && <Icon className='icon'></Icon>}
      {Avatar && <Avatar src={src} className='icon'></Avatar>}
      <p>{heading}</p>
    </div>
  )
}

export default HeaderOption
