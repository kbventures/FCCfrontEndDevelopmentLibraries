import CreateAreactComponent from '../components/08createAreactComponent';
describe('Create A React Component', () => {
    it('MyComponent should return a div element..', () => {
        const wrapper = shallow(<CreateAreactComponent/>);
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        expect(wrapper.at(0).exists('div') )
    });

    it('The returned div should render an h1 heading element within it.', ()=>{
        const wrapper = shallow(<CreateAreactComponent />);
        expect(wrapper.children(0).at(0).exists('h1')).toBe(true)
    })

    it('The div element should contain a string of text.', ()=>{
        const wrapper = shallow(<CreateAreactComponent />);
        const text = wrapper.children(0).at(0).text()
        expect(text).toBe('Hello React!')
    })

    it('MyComponent should return JSX.', ()=>{
        const wrapper = shallow(<CreateAreactComponent />);
        // console.log('FUNCTION COMPONENT')
        // console.log('Shallow')
        // console.log(wrapper.debug())
        // console.log('Render')   
        const renderWrapper = render(<CreateAreactComponent />);
        // console.log(renderWrapper)
        // console.log('Mount')
        const mountWrapper = mount(<CreateAreactComponent />);
        // console.log(mountWrapper.debug())
    })
});
