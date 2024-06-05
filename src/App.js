import React from 'react';
import './App.css';
import CentralContainer from './components/CentralContainer';
import Header from './components/Header';
import LeftContainer from './components/LeftConatiner';
import RightContainer from './components/RightContainer';
import { selectUser } from './features/user/userSlice';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {

  document.body.style.backgroundColor = 'rgb(231, 231, 231)';
  
  const user = useSelector(selectUser);

  return (
    <Routes>
      <Route path='/' element={user ? 
        <div className='app'>
        <Header></Header>

        <div id='main-content-container'>
          <LeftContainer></LeftContainer>
          <CentralContainer></CentralContainer>
          <RightContainer></RightContainer>
        </div>
        
        </div> : <Login></Login>} />
      
    </Routes>
  );
}

export default App;