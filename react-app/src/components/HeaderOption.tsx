import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import './styles/HeaderOption.css'

interface Props{
  heading: string;
}
function HeaderOption({heading}: Props) {
  return (
    <div className='headerOption'>
    
      <HomeIcon id='houseIcon'></HomeIcon>
      <p>{heading}</p>
      
    </div>
  )
}

export default HeaderOption
