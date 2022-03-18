import React from 'react';


export const Citrus = () => {
    return (
      <div>
          <h4>Cirtus</h4>
       <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
      </div>
    );
  };

  export const NonCitrus = () => {
    return (
      <div>
          <h4>Non-Citrus</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };

export const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <Citrus />
        <NonCitrus />
      </div>
    );
  };


  export const TypesOfVegetables = () => {
    return (
      <div>
       <ul>
          <li>Brussel Sprouts</li>
          <li>Broccoli</li>
          <li>Squash</li>
        </ul>
      </div>
    );
  };


  export const Vegetables = () => {
    return (
      <div>
        <h2>Vegetables</h2>
        <TypesOfVegetables />
      </div>
    );
  };
  
  export const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
        <TypesOfFruit />
        { /* Change code above this line */ }
      </div>
    );
  };
  
 export  class TypesOfFood12 extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div id="challenge-node">
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits />
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
  };