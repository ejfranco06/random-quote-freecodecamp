import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      content: "The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be.",
      author: "William James" 
    }
  }

  render(){
    return (
      <main id='quote-box'>
        <p id='text'><i class="fas fa-quote-left"></i> {this.state.content} <i class="fas fa-quote-right"></i></p>
        <p id='author'>-{this.state.author}</p>
        <div>
          <button id='new-quote'>new quote</button>
        </div>
      </main>
    );
  }
  
}

export default App;
