import React, { Component } from 'react';

const JSX = (
    <div id="challenge-node">
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );

class RenderReactElementsToTheDom extends Component {
  render() {
    return (    
       JSX 
    );
  }
}

export default RenderReactElementsToTheDom;