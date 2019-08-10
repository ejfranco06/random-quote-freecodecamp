import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div id='quote-box'>
        <h1>Random Quote Generator</h1>
      </div>
    );
  }
  
}

export default App;
