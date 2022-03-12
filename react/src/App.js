import Add from './components/Add';
import Counter from './components/Counter';
import CounterList from './components/CounterList'
import React01 from './components/React01'
import React from 'react'

function App() {
  return (
    <div>
        <p>
          JSX transpiled to JS <code>src/App.js</code>.
        </p>
        <header><Add /></header>
        <Counter />
        <CounterList />
        <React01 />
    </div>
  );
}

export default App;