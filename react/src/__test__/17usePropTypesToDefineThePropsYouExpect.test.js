import {ShoppingCart17, Items} from '../components/17usePropTypesToDefineThePropsYouExpect';



// The ShoppingCart component should render.

// The Items component should include a propTypes check to require a value for quantity and ensure that its value is a number.

describe('Pass Array As Props', () => {

    let wrapperShoppingCartMount;
    let wrapperShoppingCartShallow;
    let wrapperItemsMount;
    let wrapperItemsShallow;

    beforeEach(() => {
        wrapperShoppingCartMount = mount(<ShoppingCart17 />);
        wrapperShoppingCartShallow = shallow(<ShoppingCart17 />);
        wrapperItemsMount = mount(<Items quantity={10} />);
        wrapperItemsShallow = shallow(<Items />);
   });
    
    it('The Items component should render.', () => {  
        expect(wrapperItemsShallow.contains(<h1>
            Current Quantity of Items in Cart: 
            0
          </h1>)).toEqual(true) 
    }); 
        
});