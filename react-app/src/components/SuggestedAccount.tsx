import './styles/SuggestedAccount.css'
import AddIcon from '@mui/icons-material/Add';

interface Props {
    Avatar: React.ElementType;
    src: string;
    name: string;
    description: string;
}

function SuggestedAccount({Avatar, src, name, description}: Props) {
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