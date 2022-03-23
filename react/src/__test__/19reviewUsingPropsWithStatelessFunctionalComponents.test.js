import {App18, Welcome} from '../components/18accessPropsUsingThisProps';


// The CampSite component should render.

// The Camper component should render.

// The Camper component should include default props which assign the string CamperBot to the key name.

// The Camper component should include prop types which require the name prop to be of type string.

// The Camper component should contain a p element with only the text from the name prop.
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
  
    });        
});