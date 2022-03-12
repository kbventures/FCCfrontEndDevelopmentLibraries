import React01 from '../components/React01';
describe('<Add /> rendering', () => {
    it('should render one <h1>', () => {
        let wrapper = shallow(<React01 />);
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)

        const h1Element = wrapper.type();
        expect(h1Element).toEqual('h1');

        // const  = wrapper.text();
        // console.log(test)
        // console.log(wrapper.type)
        // console.log(wrapper.length);
        // const h1Text = wrapper.children('h1').text();
        // expect(h1Text).toBe('Hello JSX!')
        // console.log(wrapper.debug())

    });
});