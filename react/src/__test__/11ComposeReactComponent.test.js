import {TypesOfFruit, TypesOfFood11} from '../components/11ComposeReactComponents';

describe('Use React to Render Nested Components', () => {

    let wrapperTypesOfFruit;
    let wrapperTypesOfFood;

    beforeEach(() => {

        wrapperTypesOfFruit = shallow(<TypesOfFruit />);
        wrapperTypesOfFood  = shallow(<TypesOfFood11 />);
   });

    it('The TypesOfFood component should return a single div element', () => {
        expect(wrapperTypesOfFood.length).toEqual(1)   
        expect(wrapperTypesOfFood.at(0).exists('div')).toBe(true)     
    });

    it('The TypesOfFood component should return the Fruits component', ()=>{
        expect(wrapperTypesOfFood.children().length).toEqual(3)   
        expect(wrapperTypesOfFood.children(0).at(1).exists('Fruits')).toBe(true)
    })

    it('The TypesOfFruit component should return the NonCitrus component and the Citrus component.', ()=>{
        expect(wrapperTypesOfFruit.children().length).toEqual(3)   
        expect(wrapperTypesOfFruit.children(0).at(0).exists('h2')).toBe(true)
        expect(wrapperTypesOfFruit.children(0).at(1).exists('Citrus')).toBe(true)
        expect(wrapperTypesOfFruit.children(0).at(2).exists('NonCitrus')).toBe(true)
    })
    
    it('The TypesOfFood component should return the Vegetables component below the Fruits component.', () => {
        expect(wrapperTypesOfFood.children().length).toEqual(3) 
        expect(wrapperTypesOfFood.children(0).at(0).exists('h1')).toBe(true)
        expect(wrapperTypesOfFood.children(0).at(1).exists('Fruits')).toBe(true)
        expect(wrapperTypesOfFood.children(0).at(2).exists('Vegetables')).toBe(true)
    });
});
