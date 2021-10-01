import React, { Component } from 'react';

class App extends Component {
  state = {
    text: 'Landing Page 1'
  }

  componentDidMount() {
    console.log(this.state.text); // 1st console.log
    this.setState({ text: 'Landing Page 2' }); // Changes text value > activates componentDidUpdate
  }

  componentDidUpdate() {
    console.log(this.state.text); // 2nd console.log

    const { text } = this.state; // creates a variable with current state
    
    if (text === 'Landing Page 2') { // Gets afirmative
      this.setState({ text: 'Landing Page 3' }); // 3rd console.log
    }
  }

  render() {
    
    return <div>
      {this.state.text}
    </div>;
  }
}

export default App;
