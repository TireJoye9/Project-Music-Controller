import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import RoomWrapper from './room';

export default class App extends Component { 
  constructor(props) {
    super(props);
 
  }
 render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/join" element={<RoomJoinPage/>} />
          <Route path="/create" element={<CreateRoomPage />} />
           <Route path="/room/:roomCode" element={<RoomWrapper />} />
        </Routes>
      </Router>
    );
  }
}



const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(<App />); 
