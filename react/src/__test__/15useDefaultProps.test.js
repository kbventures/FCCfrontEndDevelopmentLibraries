import ShoppingCart from '../components/15useDefaultProps';

// The ShoppingCart component should render.

// The ShoppingCart component should have a default prop of { items: 0 }.


describe('Pass Array As Props', () => {

    let wrapperShoppingCartMount;
    let wrapperShoppingCartShallow;

    beforeEach(() => {
        wrapperShoppingCartMount = mount(<ShoppingCart />);
        wrapperShoppingCartShallow = shallow(<ShoppingCart />);        
   });

    it('The ToDo component should return a single outer div.', () => {  
        const props = wrapperShoppingCartMount.props()   
        expect(props).toEqual({ items: 0 })


    });
    
    it('The ShoppingCart component should render.', () => {  
        expect(wrapperShoppingCartMount.contains(<ShoppingCart />)).toEqual(true)   
    });
});



