// cite:https://codepen.io/claytonkreisel/pen/WNQyEKN?editors=0010

import React from "react";
import "../quoteGenerator/QuoteGenerator.css";

class QuoteGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "purple",
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  //changes the color
  handleColorChange(color) {
    this.setState({
      color: color,
    });
  }

  render() {
    return (
      <div id="app" className={this.state.color}>
        <QuoteBox
          onChangeAppColor={this.handleColorChange}
          color={this.state.color}
        />
      </div>
    );
  }
}

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: "",
      curColor: this.props.color,
      tweetUrl: "https://twitter.com/intent/tweet/?text=",
    };

    this.getNewQuote();

    // Bind handles and functions
    this.getNewQuote = this.getNewQuote.bind(this);
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  // get a quote from local json and set state
  getNewQuote() {
    const app = this;
    fetch("../QuoteGenerator/Quote.json")
      .then((response) => response.json())
      .then((data) => {
        app.setState({
          quoteText: data.quote,
          tweetUrl:
            "https://twitter.com/intent/tweet/?text=" +
            data.content.replace(/ /g, "+"),
        });
      });
  }

  //handles button click
  handleNewQuote() {
    const colors = ["gray", "blue", "purple", "red", "orange", "green"];
    let color = colors[Math.floor(Math.random() * colors.length)];
    while (color === this.state.curColor) {
      color = colors[Math.floor(Math.random() * colors.length)];
    }
    this.setState({
      curColor: color,
    });
    this.props.onChangeAppColor(color);
    this.getNewQuote();
  }

  render() {
    return (
      <main id="quote-box">
        <div className="quote-content">
          <div className="text">{this.state.quoteText}</div>
        </div>
        <button onClick={this.handleNewQuote} id="new-quote">
          Get New Quote
        </button>
        <a
          href={this.state.tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="tweet-quote"
        >
          <i className="fab fa-twitter"></i>Tweet Quote
        </a>
      </main>
    );
  }
}
export default QuoteGenerator;
