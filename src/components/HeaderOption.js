import React from 'react'
import './styles/HeaderOption.css'

 function HeaderOption({onClick, heading, Icon, Avatar, src}) {

  return (
    <div onClick={onClick} className='headerOption'>
    
      {Icon && <Icon className='icon'></Icon>}
      {Avatar && <Avatar src={src} className='icon'></Avatar>}
      <p>{heading}</p>
    </div>
  )
}

export default HeaderOption
