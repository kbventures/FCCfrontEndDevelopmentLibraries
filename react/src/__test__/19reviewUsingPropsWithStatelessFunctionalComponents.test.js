import {CampSite19, Camper} from '../components/19reviewUsingPropsWithStatelessFunctionalComponents';

// The Camper component should include default props which assign the string CamperBot to the key name.

// The Camper component should include prop types which require the name prop to be of type string.

describe('Pass Array As Props', () => {

    let wrapperCampSite19Mount;
    let wrapperCampSite19Shallow;
    let wrapperCamperMount;
    let wrapperCamperShallow;

    beforeEach(() => {
        wrapperCampSite19Mount = mount(<CampSite19 />);
        wrapperCampSite19Shallow = shallow(<CampSite19 />);
        wrapperCamperMount = mount(<Camper />);
        wrapperCamperShallow = shallow(<Camper />);
   });

    it('The CampSite component should render.', () => {
        expect(wrapperCampSite19Mount.contains(<CampSite19>
            <div>
              <Camper name="CamperBot">
                <p>
                  CamperBot
                </p>
              </Camper>
            </div>
          </CampSite19>))
    });
    
    it('The Camper component should render', () => {
        expect(wrapperCamperMount.contains( <Camper name="CamperBot">
        <p>
          CamperBot
        </p>
      </Camper>))
    });


    it('The Camper component should contain a p element with only the text from the name prop.', () => {
        const text = wrapperCamperMount.find('p').text()
        expect(text).toEqual('CamperBot')
    });
});