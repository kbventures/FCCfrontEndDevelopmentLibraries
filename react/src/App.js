import Add from './components/Add';
import Counter from './components/Counter';
import CounterList from './components/CounterList'
import CreateSimpleJsxElement from './components/01createSimpleJsxElement'
import CreateComplexJsxElement from './components/02CreateComplexJsxElement'
import AddCommentsJsx from './components/03addCommentsJsx'
import RenderHtmlElementsToTheDom from './components/04renderReactElementsToTheDom'
import DefineAnHtmlClassInJsx from './components/05defineAnHtmlClassInJsx'
import SelfClosingJsxTags from './components/06selfClosingJsxTags'
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
        <CreateSimpleJsxElement />
        <CreateComplexJsxElement />
        <AddCommentsJsx />
        <RenderHtmlElementsToTheDom />
        <DefineAnHtmlClassInJsx />
        <SelfClosingJsxTags />
    </div>
  );
}

export default App;