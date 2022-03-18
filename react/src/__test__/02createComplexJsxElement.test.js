import React02 from '../components/02CreateComplexJsxElement';


describe('Create A Complex JSX Element', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<React02 />);
   });
    it('The constant JSX should return a div element.', () => {
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        expect(wrapper.at(0).exists('div')).toBe(true)

    });

    it('div should contain an h1 tax as the first element', ()=>{
        expect(wrapper.children(0).at(0).exists('h1')).toBe(true)
    })

    it('The div should contain a p tag as the second element.', ()=>{
        expect(wrapper.children(0).at(1).exists('p')).toBe(true)        
    })

    it('The div should contain a ul tag as the third element.', ()=>{
        expect(wrapper.children(0).at(2).exists('ul')).toBe(true) 
    })

    it('The ul should contain three li elements.', ()=>{
        expect(wrapper.children(0).at(2).children(0).at(0).exists('li')).toBe(true) 
        expect(wrapper.children(0).at(2).children(0).at(1).exists('li')).toBe(true) 
        expect(wrapper.children(0).at(2).children(0).at(2).exists('li')).toBe(true) 
    })
});




