import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { Socket, io } from 'socket.io-client';

const socket: Socket = io('http://localhost:4000');  // server will run on the port 4000 in the localhost


function App() {
  const [userName , setUserName] = useState('');
  const [userRoom , setUserRoom] = useState('');
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={
          <Home 
          userName = {userName}
          setUserName = {setUserName}
          userRoom = {userRoom}
          setUserRoom = {setUserRoom}
          socket = {socket}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;