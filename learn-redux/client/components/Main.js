import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render () {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.chidren, this.props)}
      </div>
    )
  }
})

export default Main;
