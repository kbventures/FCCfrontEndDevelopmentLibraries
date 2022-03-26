import App from '../App';
import CreateSimpleJsxElement from '../components/01createSimpleJsxElement'
import renderer from 'react-test-renderer';



describe('App', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  
  // it('should render correctly', () => {
  //   const tree = renderer.create(<App />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Calculator Component', () => {
    expect(wrapper.containsMatchingElement(<CreateSimpleJsxElement />)).toEqual(true);
  });
});

