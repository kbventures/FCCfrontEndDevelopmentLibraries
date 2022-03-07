import React from 'react'
import { render } from 'enzyme'
import Enzyme from 'enzyme'

import JSX from './fccexercises/react01.jsx'

describe('<JSX />', () => {
  test('should render ', () => {
    const wrapper = render(
      <JSX />
      )
    //   const JSX1 = <h1>Hello JSX!</h1>;

    console.log(wrapper.html())
    // expect(wrapper.html().Enzyme.toequal('<h1>Hello JSX!</h1>'))
    

    //   expect(JSX.type === 'h1');
    //   expect(JSX.innHTML === 'Hello  JSX!')
    })
})