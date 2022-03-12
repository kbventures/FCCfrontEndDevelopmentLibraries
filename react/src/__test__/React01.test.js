import React01 from '../components/React01';
describe('<Add /> rendering', () => {
    it('should render one <h1>', () => {
        let wrapper = shallow(<React01 />);
        expect(wrapper.children('h1')).toHaveLength(1);
        const h1Text = wrapper.children('h1').text();
        expect(h1Text).toBe('Hello JSX!')
    });
});