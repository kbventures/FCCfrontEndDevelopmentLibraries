import {App18, Welcome} from '../components/18accessPropsUsingThisProps';


// The child of App should be the Welcome component.

// The Welcome component should have a prop called name.

// The Welcome component should display the string you pass as the name prop within strong tags.


describe('Pass Array As Props', () => {

    let wrapperAppMount;
    let wrapperAppShallow;
    let wrapperWelcomeMount;
    let wrapperWelcomeShallow;

    beforeEach(() => {
        wrapperAppMount = mount(<App18 />);
        wrapperAppShallow = shallow(<App18 />);
        wrapperWelcomeMount = mount(<Welcome />);
        wrapperWelcomeShallow = shallow(<Welcome />);
   });

    it('The App component should return a single div element', () => {
        const wrapperLength = wrapperAppShallow.length;
        expect(wrapperLength).toEqual(1)
        const element = wrapperAppShallow.type();
        expect(element).toEqual('div');
    });        
});