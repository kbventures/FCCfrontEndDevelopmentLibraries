import StatefulComponent20 from '../components/20createAstatefulComponent';


// The CampSite component should render.

// The Camper component should render.

// The Camper component should include default props which assign the string CamperBot to the key name.

// The Camper component should include prop types which require the name prop to be of type string.

// The Camper component should contain a p element with only the text from the name prop.
describe('Pass Array As Props', () => {

    let wrapperStatefulComponentMount;
    let wrapperStatefulComponentShallow;

    beforeEach(() => {
        wrapperStatefulComponentMount = mount(<StatefulComponent20 />);
        wrapperStatefulComponentShallow = shallow(<StatefulComponent20 />);

   });

    it('The App component should return a single div element', () => {
  
    });        
});