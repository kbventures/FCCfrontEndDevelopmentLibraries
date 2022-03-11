import React from 'react'
import {shallow, mount} from 'enzyme';
import CounterList from '../components/CounterList'


describe('CounterList', () =>{
    it('just for demo!', () =>{




        const wrapper = shallow(<CounterList />)

        const counters = wrapper.find('Counter')
        const countersLength = counters.length;
        // console.log(counters.length)
        expect(countersLength).toEqual(3)
      
        // console.log(counters.debug())
    // const shallowWrapper = shallow(<CounterList />)
    // const mountWrapper = mount(<CounterList />)
    // console.log('shallow html', shallowWrapper.debug())
    // console.log('mount html', mountWrapper.debug())
})
})

