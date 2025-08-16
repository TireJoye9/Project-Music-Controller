import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='center'> 
          <p>This is the HomePage</p>
        </div>
        
    );
    }

}