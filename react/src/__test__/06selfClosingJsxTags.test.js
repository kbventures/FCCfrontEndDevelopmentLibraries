import SelfClosingJsxTags from '../components/06selfClosingJsxTags';
describe('Learn About Self-Closing JSX Tags', () => {
    it('The constant JSX should return a div element.', () => {
        const wrapper = shallow(<SelfClosingJsxTags/>);
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        expect(wrapper.at(0).exists('div') )
    });

    it('Contains All Elements', ()=>{
        const wrapper = shallow(<SelfClosingJsxTags />);
        expect(wrapper.contains(     <div>
            <h2>Welcome to React!</h2> <br />
            <p>Be sure to close all tags!</p>
            <hr />
          </div>)).toEqual(true)    
    })

    it('The div should contain a br tag.', ()=>{
        const wrapper = shallow(<SelfClosingJsxTags />);
        expect(wrapper.contains( <hr />
       )).toEqual(true)    
    })

    it('The div should contain an hr tag.', ()=>{
        const wrapper = shallow(<SelfClosingJsxTags />);
        expect(wrapper.contains( <hr />
       )).toEqual(true)    
    })
});

