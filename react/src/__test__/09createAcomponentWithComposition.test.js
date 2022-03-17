import CreateAreactComponentWithComposition from '../components/09createAComponentWithComposition';


describe('Create a react component with composition', () => {
    it('MyComponent should return a div element..', () => {
        const wrapper = shallow(<CreateAreactComponentWithComposition />);
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        expect(wrapper.at(0).exists('div') )
        console.log(wrapper.debug())
    });

    it('The component should return two nested elements', ()=>{
        const wrapper = shallow(<CreateAreactComponentWithComposition />);
        expect(wrapper.children().length).toEqual(2)        
    })

    it('The component should return the ChildComponent as its second child', ()=>{
        const wrapper = shallow(<CreateAreactComponentWithComposition />);
        expect(wrapper.children(0).at(1).exists('ChildComponent')).toBe(true)
    })
});




