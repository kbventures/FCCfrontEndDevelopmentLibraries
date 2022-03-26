import CreateAreactComponent from '../components/08createAreactComponent';


describe('Create A React Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CreateAreactComponent />);
   });

    it('MyComponent should return a div element..', () => {
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        expect(wrapper.at(0).exists('div') )
    });

    it('The returned div should render an h1 heading element within it.', ()=>{
        expect(wrapper.children(0).at(0).exists('h1')).toBe(true)
    })

    it('The div element should contain a string of text.', ()=>{
        const text = wrapper.children(0).at(0).text()
        expect(text).toBe('Hello React!')
    })
});
