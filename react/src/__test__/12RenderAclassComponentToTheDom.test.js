import {TypesOfFruit, TypesOfFood12, Fruits, Vegetables} from '../components/12RenderAClassComponentToTheDom';

describe('Render a Class Component to the DOM', () => {

    let wrapperTypesOfFruit;
    let wrapperTypesOfFood;
    let wrapperFruits;
    let wrapperVegetables;

    beforeEach(() => {
        wrapperFruits = shallow(<Fruits />);
        wrapperVegetables = shallow(<Vegetables />)
        wrapperTypesOfFruit = shallow(<TypesOfFruit />);
        wrapperTypesOfFood  = shallow(<TypesOfFood12 />);
   });

    it('The TypesOfFood component should return a single div element', () => {
        expect(wrapperTypesOfFood.length).toEqual(1)   
        expect(wrapperTypesOfFood.at(0).exists('div')).toBe(true)     
    });

    it('The TypesOfFood component should render the Fruits component after the h1 element', ()=>{
        expect(wrapperTypesOfFood.children(0).at(0).exists('h1')).toBe(true)
        expect(wrapperTypesOfFood.children(0).at(1).exists('Fruits')).toBe(true)
        expect(wrapperTypesOfFood.children().length).toEqual(3)   
    })

    it('The TypesOfFood component should render the Vegetables component after Fruits.', ()=>{ 
        expect(wrapperTypesOfFood.children(0).at(2).exists('Vegetables')).toBe(true)
    })

    it('The TypesOfFood component should render to the DOM within the div with the id challenge-node.', ()=>{
        // console.log(wrapperTypesOfFood.debug())
        // expect(wrapperTypesOfFood.find('id="challenge-node"')).to.have.lengthOf(1);
        // expect(wrapperTypesOfFood.find('#challenge-node')).to.have.lengthOf(1);

        // console.log(wrapperTypesOfFood.debug())
        expect(wrapperTypesOfFood.contains(<div id="challenge-node">
        <h1>
          Types of Food:
        </h1>
        <Fruits />
        <Vegetables />
      </div>)).toEqual(true)  
    })

});
