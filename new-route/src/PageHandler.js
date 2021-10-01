import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageHandler extends Component {
  render() {
    const { id } = this.props.match.params;
    return <div>
      Page {id}<br /><br />
      <Link to="/">Go home</Link>
    </div>;
  }
}

export default PageHandler;
