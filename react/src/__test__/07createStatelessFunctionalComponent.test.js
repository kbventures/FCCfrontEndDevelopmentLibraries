import CreateStatelessFunctionalComponent from '../components/07createStatelessFunctionalComponent';
describe('Learn About Self-Closing JSX Tags', () => {
    it('MyComponent should return a div element..', () => {
        const wrapper = shallow(<CreateStatelessFunctionalComponent/>);
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        expect(wrapper.at(0).exists('div') )
    });

    it('The div element should contain a string of text.', ()=>{
        const wrapper = shallow(<CreateStatelessFunctionalComponent />);
        const text = wrapper.at(0).text()
        expect(text).toBe('Some Text')
    })

    it('The div element should contain a string of text.', ()=>{
        const wrapper = shallow(<CreateStatelessFunctionalComponent />);
        let wrapperType = wrapper.type()
        expect(wrapperType).toEqual('div')
    })

    it('MyComponent should return JSX.', ()=>{
        const wrapper = shallow(<CreateStatelessFunctionalComponent />);
        expect(wrapper.contains(<div>Some Text</div>)).toEqual(true) 
        // console.log('CLASS COMPONENT')
        // console.log('Shallow')
        // console.log(wrapper.debug())
        // console.log('Render')   
        const renderWrapper = render(<CreateStatelessFunctionalComponent />);
        // console.log(renderWrapper)
        // console.log('Mount')
        const mountWrapper = mount(<CreateStatelessFunctionalComponent />);
        // console.log(mountWrapper.debug())
    })
});
