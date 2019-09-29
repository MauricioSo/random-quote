import React, { Component } from "react";
import Quote from "./quote.jsx";
import quotes from "./quotes.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { phrase: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //random quote
    let randomIndex = Math.floor(Math.random() * 6 + 1);
    this.setState(() => {
      return { phrase: quotes[randomIndex] };
    });
  }

  render() {
    return (
      <div>
        <Quote className="quote" phrase={this.state.phrase} />
      </div>
    );
  }
}

export default App;
