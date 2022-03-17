import {TypesOfFruit, Fruits, TypesOfFood} from '../components/10useReactToRenderNestedComponents';

describe('Create a react component with composition', () => {

    let wrapperTypesOfFruit;
    let wrapperFruits;
    let wrapperTypesOfFood;

    beforeEach(() => {

        wrapperTypesOfFruit = shallow(<TypesOfFruit />);
        wrapperFruits  = shallow(<Fruits />);
        wrapperTypesOfFood  = shallow(<TypesOfFood />);
   });
    it('The TypesOfFood component should return the Fruits component.', () => {
        
        console.log(wrapperTypesOfFood.debug())
        // const wrapperLength = wrapper.length;
        // expect(wrapperLength).toEqual(1)
        expect(wrapperTypesOfFood.children(0).at(0).exists('Fruits') )
    });

    it('The component should return two nested elements', ()=>{
        // expect(wrapper.children().length).toEqual(2)        
    })

    it('The component should return the ChildComponent as its second child', ()=>{
        // expect(wrapper.children(0).at(1).exists('ChildComponent')).toBe(true)
    })
});


// The TypesOfFood component should return the Fruits component.

// The Fruits component should return the TypesOfFruit component.

// The TypesOfFruit component should return the h2 and ul elements.