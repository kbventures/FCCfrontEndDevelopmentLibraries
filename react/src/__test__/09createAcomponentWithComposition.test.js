import CreateAreactComponentWithComposition from '../components/09createAComponentWithComposition';


describe('Create a react component with composition', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CreateAreactComponentWithComposition />);
   });

    it('MyComponent should return a div element..', () => {
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        expect(wrapper.at(0).exists('div') )
    });

    it('The component should return two nested elements', ()=>{
        expect(wrapper.children().length).toEqual(2)        
    })

    it('The component should return the ChildComponent as its second child', ()=>{
        expect(wrapper.children(0).at(1).exists('ChildComponent')).toBe(true)
    })
});




