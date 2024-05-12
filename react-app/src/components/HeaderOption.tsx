import React from 'react'
import './styles/HeaderOption.css'

interface Props{
  heading: string;
  Icon: React.ElementType;
}
function HeaderOption({heading, Icon}: Props) {
  return (
    <div className='headerOption'>
    
      <Icon id='icon'></Icon>
      <p>{heading}</p>
      
    </div>
  )
}

export default HeaderOption
