import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import './App.css'
import Rating from '@mui/material/Rating';

function App() {

  document.body.style.backgroundColor = 'grey';
  
  return <div className='app'>
    <Header></Header>
    </div>
}

export default App;
