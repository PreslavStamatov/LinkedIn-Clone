import { useSelector } from 'react-redux';
import './styles/HiringSection.css'
import { selectUser } from '../features/user/userSlice';

function HiringSection() {
  
  const user = useSelector(selectUser);
  const name = user.name;
  const firstName = name.split(' ')[0];
  
  return (

    <div id='hiring-section'>
      <img src={user.imgSrc} alt="profile-img" id='hiring-photo'/>
      <div id='hiring-text-container'>
      <h3 id='hiring-header'>
        Hi {firstName}, are you hiring? 
      </h3>
      
      <p id='hiring-text'>
        Discover free and easy ways to find a great hire, fast. 
      </p>
      </div>
      <div id='buttons-section'>
        <button>
          Yes, I am hiring.
        </button>
        <button>
          No, I am not hiring.
        </button>
      </div>
    </div>
  );
}

export default HiringSection;