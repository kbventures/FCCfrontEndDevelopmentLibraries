# Setting Up Basic No Creacte React App React Template


## Required installations

install ubuntu   
install git   
install nvm   
install vscode   

## Step By Step Guide From Terminal

### Initial Setup

From Terminal:  

`mkdir new-react-app`  

`cd new-react-app`  

`npm init -y`  

`touch .gitignore`  

`mkdir public`  

.ignore add: node_module



### Install Webpack

`touch webpack.config.js`  

`npm install -save-dev webpack webpack-cli`  


Modify package.json:

`
  "scripts": {
    ...,
    "build": "webpack"
  },
`
  
`
npm run build
`

##### Notice Two Errors:

###### Fix 1:

webpack.config.js:

`
module.exports = {
  mode: 'development',
};
`

###### Fix 2: 

`
mkdir src
touch ./src/index.js
`

This is the main entry point for webpack.

`
npm run build
`

Notice dist folder & ./dist/main.js is created
This is the main bunbled file.


#### Install Webpack server

`
npm i --save-dev webpack-server webpack-dev-server
`


In package.json:

`“start”: “webpack serve”`  

`npm run start`  


You can see the content of main.js here [http://localhost:8080/main.js](http://localhost:8080/main.js)

#### Add HTML Webpack Plugin

`npm install --save-dev html-wepback-plugin`  


Add to webpack.config.js:

`const HtmlWebpackPlugin = require('html-webpack-plugin');`  


This generates and index.html and add bundle.js files.


Add plugin in webpack.config.js


`const HtmlWebpackPlugin = require('html-webpack-plugin');`

`
`module.exports = {
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        template:
          './public/index.html',
      }),
    ],
  };`
`    


`npm run start`

Notice errors!

Solution: 

`touch ./public/index.html`

Add this code to ./public.index.html


`<!DOCTYPE html><html><head><h1>This is the HTML file</h1></head><body></body></html>`


`npm run start`

Open browser in localhost:8080 and check the developer console. Notice this was injected:


`<script defer src="main.js"></script></head>`


The webpack plugin added it!!!

Add console.log(“My First Web App”); ./src/index.js

Go to the localhost page, inspect and select Console, and see the output as shown below.
You can see My First Web App



#### Link Javascript with HTML

Showing content of the javascript file on the browser through the HTML file:

Add to ./public/index.html

`'<div id="fromjs"></div>'`

Add Code which Interacts With HTML DOM in ./src/index.js:

`document.querySelector('#fromjs').innerHTML = '<h1>From index.js</h1>';`

Check result.


### Add react And react-dom

Terminal: 

`npm install --save-dev react react-dom`

Index.js:

`import React from 'react'
import ReactDOM from 'react-dom'`

`ReactDOM.render(
  'Hello from index.js',
  document.querySelector(
    '#fromjs'
  )
);`

### Adding Babel to Wepback

Replace index.js code with:

`import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  '<h1>Hello from js</h1>',
  document.querySelector(
    '#fromjs'
  )
);`

Run:

`npm run start`

Notice error!

Dependencies

`npm i @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react babel-loader --save-dev`\

Add Module to webpack.config.js

`const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },...`

  `npm run start`

  #### Injecting HTML Elements

index.js: 

  `import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  '<h1>Hello from js</h1>',
  document.querySelector(
    '#fromjs'
  )
);`

`npm run start`

Browse to HTTP://localhost:8080


### Adding React Component

`touch ./src/App.js`

Add: 


`import React from 'react'
function App() {
  return (
    <div>
        <p>
          JSX transpiled to JS <code>src/App.js</code>.
        </p>
    </div>
  );
}
export default App;`

Replace code in ./src/index.js with:

`import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
ReactDOM.render(
    <App />,
  document.querySelector('#fromjs')
);`


Then,

`npm run start`



### Install Jest 


`npm install --save-dev jest`

Create File src/sum.js:

`function sum(a, b) {
  return a + b;
}
module.exports = sum;`

Create src/sum.test.js:

`const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`

Modify package.json

`{
  "scripts": {
    "test": "jest"
  }
}`

Test:

`npm run test`

Modify package.json to watch for changes:

`{
  "scripts": {
    "test": "jest --watch"
  }
}`


### Jest Using Babel With React

`npm install --save-dev babel-jest @babel/core @babel/preset-env react-test-renderer`

Create babel.config.js

`module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};`




### Jest using Installing Enzyme

`npm install --save-dev enzyme @wojtekmaj/enzyme-adapter-react-17`

`mkdir test`

`touch ./test/setupTests.js`

Add following content to above file:

`import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';`

// React 16 Enzyme adapter
`Enzyme.configure({ adapter: new Adapter() });`

// Make Enzyme functions available in all test files without importing
`global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;`

Create jest.config.js and add:

`module.exports = {
    setupFiles: [
        '<rootDir>/test/setupTests.js',
    ]
};`

The purpose of this configuration is to tell the Jest to execute this setupTests.js file when running the tests, so the variables declared as global in this file can be used in tests that we are going to write

Create ./src/compponents/Add.js

`import React, { Component } from 'react';
class Add extends Component {`
  `render() {`
    `return (`
      ```html
      <div>
       <h1>Add Function Header 1</h1>
       <h1>Add Function Header 2</h1>
       <h1>Add Function Header 3</h1>
      </div>
	  ```
    );
`  }`
`}`
`export default Add;`

Modify App.js

`import Add from './components/Add';1
`import React from 'react'`
`function App() {`
  `return (`
    `<div>
        <p>
          JSX transpiled to JS <code>src/App.js</code>.
        </p>
        <header><Add /></header>
    </div>`
 ` );`
`}`

export default App;`


A simple Test using Enzyme with Jest:

`import Add from '../src/components/Add';`
`describe('<Add /> rendering', () => {`
    `it('should render one <h1>', () => {`
       `let wrapper = shallow(<Add />);`
        `expect(wrapper.children('h1')).toHaveLength(3);`
    `});`
`});`
