import './styles/RightContainer.css'
import InfoIcon from '@mui/icons-material/Info';
import SuggestedAccount from './SuggestedAccount';
import Avatar from '@mui/material/Avatar';

function RightContainer(props:any) {

  return (
    <div id="right-container">
      <div id='right-container-header'>
        <p>Add to your feed</p>
        <InfoIcon className='info-icon'></InfoIcon>
      </div>
      <SuggestedAccount Avatar={Avatar} name='N'></SuggestedAccount>
    </div>
  )
}

export default RightContainer