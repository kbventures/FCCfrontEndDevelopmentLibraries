import StatefulComponent20 from '../components/20createAstatefulComponent';


// StatefulComponent should exist and render.

// The state of StatefulComponent should be initialized with a property name set to a string.


describe('Stateful Component', () => {

    let wrapperStatefulComponentMount;
    let wrapperStatefulComponentShallow;

    beforeEach(() => {
        wrapperStatefulComponentMount = mount(<StatefulComponent20 />);
        wrapperStatefulComponentShallow = shallow(<StatefulComponent20 />);

   });

   it('The property name in the state of StatefulComponent should render in the h1 element.', () => {
    const text = wrapperStatefulComponentShallow.children().at(0).text()
    expect(text).toBe('Mathieu')
});

it('StatefulComponent should render a div and an h1 element.', () => {
    const wrapperLengthParent = wrapperStatefulComponentShallow.length;
    const wrapperLengthChild = wrapperStatefulComponentShallow.children().length;
    expect(wrapperLengthParent).toEqual(1)
    expect(wrapperLengthChild).toEqual(1)
    const h1Element = wrapperStatefulComponentShallow.children().type();
    expect(h1Element).toEqual('h1');
    const divElement = wrapperStatefulComponentShallow.type();
    expect(divElement).toEqual('div');
});
});