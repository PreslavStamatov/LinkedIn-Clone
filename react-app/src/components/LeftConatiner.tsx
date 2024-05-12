import './styles/LeftContainer.css'
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';

function LeftContainer() {
  return (
    <div id="left-container">
      <div id='profile-container'>
        <div id='profile-background'>
          <img id='background-image' src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg" alt="background-image" />
        </div>
        <img src="https://t.ly/64wxR" alt="profile-picture" />
        <div id='username'>
          <h6>Preslav Stamatov</h6>
          <p>preslav18122@abv.bg</p>
        </div>

        <div id='connections-container'>
          <div id='connections-content'>
            <div id='connections'>
              <p>Connections</p>
              <PersonAddAltSharpIcon style={{fontSize: 17}}></PersonAddAltSharpIcon>
            </div>
            <p>Grow your network</p>
          </div>
        </div>

        <div id='premium'>
          <p id='premium-first-line'>Grow professionally with Premium</p>
          <p id='premium-second-line'>Try 1 month for BGN0</p>
        </div>

        <div id='saved-itmes'>
          <BookmarkIcon style={{color: 'grey'}}></BookmarkIcon>
          <p>Saved items</p>
        </div>
      </div>

      <div id='more-content-container'>
        <div id='social'>
          <div id='text'>
            <p>Groups</p>
            <p id='events-text'>Events</p>
            <p>Followed Hashtags</p>
          </div>
          <button id='create-event'>
            <AddIcon></AddIcon>
          </button>
        </div>
        <div id='discover-more'>
          <p>Discover more</p>
        </div>  
      </div>

    </div>
  )
}

export default LeftContainer