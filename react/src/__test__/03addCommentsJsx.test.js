import AddCommentsJsx from '../components/03addCommentsJsx';
describe('Add Comments in JSX', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AddCommentsJsx />);
   });
    it('The constant JSX should return a div element.', () => {
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        expect(wrapper.at(0).exists('div') )
    });

    it('The div should contain an h1 tag as the first element.', ()=>{
        expect(wrapper.children(0).at(0).exists('h1')).toBe(true)
    })

    it('The div should contain a p tag as the second element.', ()=>{
        expect(wrapper.children(0).at(1).exists('p')).toBe(true)        
    })

    it('The existing h1 and p elements should not be modified.', ()=>{
        expect(wrapper.contains(<div>
            <h1>This is a block of JSX</h1>
            <p>Here's a subtitle</p>
            </div>)).toEqual(true)
    })

    it('The JSX should use valid comment syntax', ()=>{
        expect(wrapper.contains(<div>
            <h1>This is a block of JSX</h1>
            <p>Here's a subtitle</p>
            </div>)).toEqual(true)     
    })
});
