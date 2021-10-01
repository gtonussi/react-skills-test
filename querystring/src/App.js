import React, { Component } from 'react';
import queryString from 'query-string';

class App extends Component {
  state = {
    text: {}
  }

  componentDidMount() {
    this.setState({ 
      text: queryString.parse(this.props.location.search, {sort: false}),
    });
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        {
          Object.entries(text)
          .map(item => { 
            return (
              <p key={Math.random()}>{item[0]}: {item[1]}</p>
            )
          })
        }
      </div>
    )
  }
}

export default App;
