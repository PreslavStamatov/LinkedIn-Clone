import './styles/SuggestedAccount.css'
import AddIcon from '@mui/icons-material/Add';


function SuggestedAccount({Avatar, src, name, description}) {
    return (
    <div id='suggested-account'>
        <Avatar src={src}/>
        <div id='profile-information'>
            <p id='name'>{name}</p>
            <p id='description'>{description}</p>
            <button id='follow-button'>
                <AddIcon className='add-icon'></AddIcon>
                <p>Follow</p>
            </button>
        </div>
    </div>
    )
}
export default SuggestedAccount