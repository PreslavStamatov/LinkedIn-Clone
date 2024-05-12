import './styles/SuggestedAccount.css'
import AddIcon from '@mui/icons-material/Add';

interface Props {
    Avatar: React.ElementType;
    name: string;
}

function SuggestedAccount({Avatar, name}: Props) {
    return (<div id='suggested-account'>
        <Avatar className='profile-icon'>{name}</Avatar>
        <div id='profile-information'>
            <p id='name'>Niki Bibi</p>
            <p id='description'>Lubov na Presi</p>
            <button id='follow-button'>
                <AddIcon></AddIcon>
                <p>Follow</p>
            </button>
        </div>
    </div>)
}
export default SuggestedAccount