import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//     <h1>Hello from JAVASCRIPT</h1>,
//     document.querySelector(
//       '#fromjs'
//     )
//   );

const JSX = <h1>Hello JSX!</h1>;

ReactDOM.render(
  JSX,
  document.getElementById('root'));
// document.querySelector('#fromjs').innerHTML = `<h1>From index.js</h1>`;