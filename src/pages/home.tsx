import React from 'react';
import styles from './styles.module.css';
import { Socket } from 'socket.io-client';
import {useNavigate} from 'react-router-dom';

interface ChildProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  userRoom: string;
  setUserRoom: React.Dispatch<React.SetStateAction<string>>;
  socket: Socket;
}

const Home: React.FC<ChildProps> = ({userName,setUserName,userRoom,setUserRoom,socket}) => {

    const navigate = useNavigate();

    const joinRoom = () => {
        // make sure userName and room is entered
        if(userName !== '' && userRoom !== ''){
            socket.emit('join_room',{userName,userRoom})
        }

        // after emittinf the custom message to socket
        //navigate to the chat page
        navigate('/chat',{replace:true})
    };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <input className={styles.input} placeholder='Username...' onChange={(e)=>{setUserName(e.target.value)}}/>

        <select className={styles.input} onChange={(e)=>{setUserRoom(e.target.value)}}>
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </select>

        <button className={styles.btn} onClick={joinRoom}>Join Room</button>
      </div>
    </div>
  );
};

export default Home;
