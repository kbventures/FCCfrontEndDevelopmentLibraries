import React01 from '../components/01createSimpleJsxElement';

describe('Create a Simple JSX Element', () => {
    it('should render one <h1>', () => {
        let wrapper = shallow(<React01 />);
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        const h1Element = wrapper.type();
        expect(h1Element).toEqual('h1');
    });

    it('The h1 tag should include the text Hello JSX!', () => {
        let wrapper = shallow(<React01 />);
        const text = wrapper.at(0).text()
        expect(text).toBe('Hello JSX!')
    });
});