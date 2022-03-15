import React03 from '../components/React03';
describe('Create A Complex JSX Element', () => {
    it('The constant JSX should return a div element.', () => {
        const wrapper = shallow(<React03 />);
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        expect(wrapper.at(0).exists('div') )
    });

    it('The div should contain an h1 tag as the first element.', ()=>{
        const wrapper = shallow(<React03 />);
        expect(wrapper.children(0).at(0).exists('h1')).toBe(true)
        // expect(wrapper.find('div')).to.equal('h1');


    })

    it('The div should contain a p tag as the second element.', ()=>{
        const wrapper = shallow(<React03 />);
        expect(wrapper.children(0).at(1).exists('p')).toBe(true)        
    })

    it('The existing h1 and p elements should not be modified.', ()=>{
        const wrapper = shallow(<React03 />);
        expect(wrapper.contains(<div>
            <h1>This is a block of JSX</h1>
            <p>Here's a subtitle</p>
            </div>)).toEqual(true)
    })

    it('The JSX should use valid comment syntax', ()=>{
        const wrapper = shallow(<React03 />);
        expect(wrapper.contains(<div>
            <h1>This is a block of JSX</h1>
            <p>Here's a subtitle</p>
            </div>)).toEqual(true)     
    })
});
