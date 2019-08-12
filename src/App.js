import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      author: "",
      tweetAddr: ""
    };
    this.getQuote = this.getQuote.bind(this);
  }

  async getQuote() {
    let data = null;
    const twitterHREF = "https://twitter.com/intent/tweet?text=";
    try {
      const response = await fetch("https://api.quotable.io/random");
      data = await response.json();
    } catch (error) {
      console.log(error);
    }
    if (data != null)
      this.setState({
        content: data.content,
        author: data.author,
        tweetAddr: `${twitterHREF}"${data.content}" ${data.author}`
      });
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <main id="quote-box">
        <p id="text">
          <i className="fas fa-quote-left" /> {this.state.content}{" "}
          <i className="fas fa-quote-right" />{" "}
        </p>
        <p id="author">-{this.state.author}</p>
        <div className="button-row">
          <button id="new-quote" className="button" onClick={this.getQuote}>
            new quote
          </button>
          <a
            id="tweet-quote"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            href={this.state.tweetAddr}
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </main>
    );
  }
}

export default App;
