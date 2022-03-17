import React, { Component } from 'react';

const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
  );

class SelfClosingJsxTags extends Component {
  render() {
    return (    
       JSX 
    );
  }
}

export default SelfClosingJsxTags;