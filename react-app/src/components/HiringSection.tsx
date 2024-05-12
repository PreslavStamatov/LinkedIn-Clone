import './styles/HiringSection.css'

function HiringSection() {
  
  return (
    <div id='hiring-section'>
      <img src="https://t.ly/64wxR" alt="profile-img" id='hiring-photo'/>
      <div id='hiring-text-container'>
      <h3 id='hiring-header'>
        Hi Preslav, are you hiring? 
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