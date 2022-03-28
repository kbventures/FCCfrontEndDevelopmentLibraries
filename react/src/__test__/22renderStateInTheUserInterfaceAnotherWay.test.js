import MyComponent22 from '../components/22renderStateInTheUserInterfaceAnotherWay';

// The rendered h1 tag should include a reference to {name}.

describe('Stateful Component', () => {

    let wrapperStatefulComponentMount;
    let wrapperStatefulComponentShallow;

    const props = {
        name:'freeCodeCamp'
    }

    beforeEach(() => {
        wrapperStatefulComponentMount = mount(<MyComponent22 />);
        wrapperStatefulComponentShallow = shallow(<MyComponent22 />);
   });

    it('StatefulComponent should render a div and an h1 element.', () => {
        expect(wrapperStatefulComponentMount.at(0).exists('h1')).toBe(true)
    });

    it('MyComponent should render an h1 heading element enclosed in a single div..', () => {
        const wrapperLength = wrapperStatefulComponentMount.length;
        expect(wrapperLength).toEqual(1)
        const divElement = wrapperStatefulComponentShallow.type();
        expect(divElement).toEqual('div');
        expect(wrapperStatefulComponentShallow.at(0).exists('h1')).toBe(true)
    });

    it('MyComponent should have a key name with value freeCodeCamp stored in its state.', () => {
        expect(wrapperStatefulComponentShallow.state("name")).toEqual('freeCodeCamp');
        const state = wrapperStatefulComponentShallow.state()
        expect(state).toEqual({ name: 'freeCodeCamp' })
    });

    it('The rendered h1 heading element should only contain text rendered from the components state.', () => {
        const text = wrapperStatefulComponentShallow.find('h1').text()
        expect(text).toEqual("freeCodeCamp")
    });
});



