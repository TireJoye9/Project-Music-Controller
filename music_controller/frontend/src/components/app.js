import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'
export default class App extends Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Testing React Code</h1>;
  }
}

const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(<App/>, appDiv);