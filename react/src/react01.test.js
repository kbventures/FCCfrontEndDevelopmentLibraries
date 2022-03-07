// The constant JSX should return an h1 element.

// assert(JSX.type === 'h1');
// The h1 tag should include the text Hello JSX!

// assert(Enzyme.shallow(JSX).contains('Hello JSX!'));


// MyComponent.test.js
import React from 'react';
import Enzyme, {shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import JSX from './fccexercises/react01';

Enzyme.configure({adapter: new Adapter()})


describe("H1 tag should include the text: Hello JSX!", () => {
  it("should render my component", () => {
    const wrapper = shallow(<JSX />);

    assert(wrapper.type === 'h1');
    // assert(Enzyme.shallow(JSX).contains('Hello JSX!'));
  
  });
});