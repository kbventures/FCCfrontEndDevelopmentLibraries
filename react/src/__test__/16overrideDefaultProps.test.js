import {ShoppingCart16, Items} from '../components/16overrideDefaultProps';

// The component ShoppingCart should render.

// The component Items should render.

// The Items component should have a prop of { quantity: 10 } passed from the ShoppingCart component.


describe('Pass Array As Props', () => {

    let wrapperShoppingCartMount;
    let wrapperShoppingCartShallow;
    let wrapperItemsMount;
    let wrapperItemsShallow;
    let wrapperShoppingCartRender;
    let wrapperItemsRender;


    beforeEach(() => {
        wrapperShoppingCartMount = mount(<ShoppingCart16 />);
        wrapperShoppingCartShallow = shallow(<ShoppingCart16 />);
        wrapperItemsMount = mount(<Items quantity={10} />);
        wrapperItemsShallow = shallow(<Items />);
        wrapperShoppingCartRender = render(<ShoppingCart16 quantity={10} />);
        wrapperItemsRender = render(<Items />);
   });

    it('The component ShoppingCart should render.', () => {  
       expect(wrapperShoppingCartMount.contains(<ShoppingCart16>
        <Items quantity={10}>
          <h1>
            Current Quantity of Items in Cart: 
            10
          </h1>
        </Items>
      </ShoppingCart16>))
    }); 
    
    it('The component Items should render.', () => {  
        expect(wrapperItemsShallow.contains(<h1>
            Current Quantity of Items in Cart: 
            0
          </h1>)).toEqual(true) 
    }); 

    it('The Items component should have a prop of { quantity: 10 } passed from the ShoppingCart component.', () => {  
        expect(wrapperShoppingCartShallow.contains(<Items quantity={10} />)).toEqual(true) 
    });
        
});
