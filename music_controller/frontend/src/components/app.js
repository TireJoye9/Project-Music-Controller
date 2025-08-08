import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component { 
  constructor(props) {
    super(props);
 
  }
 render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<p>This is a page</p>} />
          <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
        </Routes>
      </Router>
    );
  }
}



const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(<App />); 
