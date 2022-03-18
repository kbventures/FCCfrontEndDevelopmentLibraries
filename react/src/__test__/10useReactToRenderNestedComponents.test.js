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
        expect(wrapperTypesOfFood.find('Fruits')).toHaveLength(1);
    });

    it('The component should return two nested elements', ()=>{
        expect(wrapperTypesOfFood.length).toEqual(1)        
        expect(wrapperTypesOfFood.children().length).toEqual(2)        
    })

    it('The component should return the ChildComponent as its second child', ()=>{
        expect(wrapperTypesOfFood.at(0).exists('div')).toBe(true)
        expect(wrapperTypesOfFood.children(0).at(1).exists('Fruits')).toBe(true)
    })

    it('The Fruits component should return the Fruits component.', () => {
        expect(wrapperFruits.at(0).exists('div')).toBe(true)
        expect(wrapperFruits.find('TypesOfFruit')).toHaveLength(1);
        expect(wrapperFruits.children(0).at(0).exists('TypesOfFruit')).toBe(true)
    });

    it('The TypesOfFruit component should return the h2 and ul elements.', ()=>{
        expect(wrapperTypesOfFruit.at(0).exists('div')).toBe(true)
        expect(wrapperTypesOfFruit.children().at(1).exists('ul')).toBe(true)
        expect(wrapperTypesOfFruit.children().at(0).exists('h2')).toBe(true)
        expect(wrapperTypesOfFruit.length).toEqual(1)        
        expect(wrapperTypesOfFruit.children().length).toEqual(2)   
        expect(wrapperTypesOfFruit.children().at(1).children().length).toEqual(4)   
        expect(wrapperTypesOfFruit.find('h2')).toHaveLength(1);
        expect(wrapperTypesOfFruit.find('ul')).toHaveLength(1)
        expect(wrapperTypesOfFruit.contains(     <div>
            <h2>
              Fruits:
            </h2>
            <ul>
              <li>
                Apples
              </li>
              <li>
                Blueberries
              </li>
              <li>
                Strawberries
              </li>
              <li>
                Bananas
              </li>
            </ul>
          </div>)).toEqual(true)  

    })
});


