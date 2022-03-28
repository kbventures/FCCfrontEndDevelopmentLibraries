import {App18, Welcome} from '../components/18accessPropsUsingThisProps';

// The Welcome component should display the string you pass as the name prop within strong tags.

describe('Pass Array As Props', () => {

    let wrapperAppMount;
    let wrapperAppShallow;
    let wrapperWelcomeMount;
    let wrapperWelcomeShallow;


    const props = {
        name: "Mathieu"
    }

    beforeEach(() => {
        wrapperAppMount = mount(<App18 />);
        wrapperAppShallow = shallow(<App18 />);
        wrapperWelcomeMount = mount(<Welcome {...props}/>);
        wrapperWelcomeShallow = shallow(<Welcome />);
   });

    it('The App component should return a single div element', () => {
        const wrapperLength = wrapperAppShallow.length;
        expect(wrapperLength).toEqual(1)
        const element = wrapperAppShallow.type();
        expect(element).toEqual('div');
    });
    
    it('The child of App should be the Welcome component.', () => {
        expect(wrapperAppShallow.children(0).at(0).exists('Welcome')).toBe(true)
    });

    it('The Welcome component should have a prop called name.', () => {
        expect(wrapperWelcomeMount.prop('name')).toBe("Mathieu")
    });

    it('The Welcome component should display the string you pass as the name prop within strong tags.', () => {
        expect(wrapperWelcomeMount.prop('name')).toBe("Mathieu")
    });

    it('The Welcome component should display the string you pass as the name prop within strong tags.', () => {  
        expect(wrapperWelcomeMount.contains( <App18>
            <div>
              <Welcome name="Mathieu">
                <div>
                  <p>
                    Hello, 
                    <strong>
                      Mathieu
                    </strong>
                    !
                  </p>
                </div>
              </Welcome>
            </div>
          </App18>))
     }); 
});