import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import './App.css'
import HiringSection from './components/HiringSection'
import CentralContainer from './components/CentralContainer';
import LeftContainer from './components/LeftConatiner';
import RightContainer from './components/RightContainer';

function App() {

  document.body.style.backgroundColor = 'rgb(231, 231, 231)';
  
  return <div className='app'>
    <Header></Header>

    <div id='main-content-container'>
      <LeftContainer></LeftContainer>
      <CentralContainer></CentralContainer>
      <RightContainer></RightContainer>
    </div>
    
    </div>
}

export default App;
