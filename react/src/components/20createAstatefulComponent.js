import React from 'react'

export default class StatefulComponent20 extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state ={
      name: "Mathieu"
    }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};