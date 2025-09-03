import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import RoomWrapper from './Room';


export default class App extends Component { 
  constructor(props) {
    super(props);
 
  }
 render() {
    return (
      <div className= 'center'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} render={() => {
            return this.state.roomCode ? (
            <Redirect to={`/room/${this.state.roomCode}`}/> 
          ) : (
              this.renderHomePage()
            );
          }}
          />
          <Route path="/join" element={<RoomJoinPage/>} />
          <Route path="/create" element={<CreateRoomPage />} />
           <Route path="/room/:roomCode" element={<RoomWrapper />} />
        </Routes>
      </Router>
      </div>
    );
  }
}



const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(<App />); 
