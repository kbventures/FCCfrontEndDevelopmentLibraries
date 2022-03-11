import React from 'react';
import Counter from '../components/Counter';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('Counter component', ()=>{

    // Snapshot test
    it('matches the snapshot', ()=>{
        const tree = renderer.create(<Counter />).toJSON()
        // console.log(tree)
        // console.log(tree.children)
        // expect(tree).toMatchSnapshot()
        expect(tree).toMatchSnapshot()
    })


    it('starts with a count of 0', ()=>{
        const wrapper = shallow(<Counter />)
        // const countState = wrapper.state().count
        // expect(countState).toEqual(0)
        const text=wrapper.find('p').text();
        expect(text).toEqual('Current count: 0')
    })

    it('can increment the count when the button is clicked', ()=>{
        const wrapper = shallow(<Counter />)
        const incrementBtn = wrapper.find('button.increment')
        incrementBtn.simulate('click')
        const text = wrapper.find('p').text();
        expect(text).toEqual('Current count: 1')
    })

    it('can decrement the count when the decrement button is clicked', ()=>{
        const wrapper = shallow(<Counter />)
        const decrementBtn = wrapper.find('button.decrement')
        decrementBtn.simulate('click')
        const text = wrapper.find('p').text();
        expect(text).toEqual('Current count: -1')
    })
})