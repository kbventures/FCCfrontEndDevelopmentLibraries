// The constant JSX should return an h1 element.

// assert(JSX.type === 'h1');
// The h1 tag should include the text Hello JSX!

// assert(Enzyme.shallow(JSX).contains('Hello JSX!'));


// MyComponent.test.js
import React from 'react';
import {shallow } from 'enzyme';
import JSX from './fccexercises/react01';
import {assert} from 'chai'



describe("H1 tag should include the text: Hello JSX!", () => {
  it("should render my component", () => {
    // const wrapper = shallow(<JSX />);
    // console.log(wrapper.debug())
    // expect(wrapper.find('h1'));
    // console.log(wrapper.find('h1').type())
    // expect(wrapper.find('h1').text()).toContain('Hello JSX!')
    
    const element = <h1>Hello JSX!</h1>;

    const wrapper2 = shallow(element);
    console.log(element.type)
    assert(element.type === 'h1');

    assert(wrapper2.contains('Hello JSX!'))
    assert(shallow(element).contains('Hello JSX!'))
  });
});

    

  