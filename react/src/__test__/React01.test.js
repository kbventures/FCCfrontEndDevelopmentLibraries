import React01 from '../components/React01';
describe('Create a Simple JSX Element', () => {
    it('should render one <h1>', () => {
        let wrapper = shallow(<React01 />);
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        const h1Element = wrapper.type();
        expect(h1Element).toEqual('h1');
    });
});